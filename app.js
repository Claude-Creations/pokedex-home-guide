// ===== Constants =====
const LANG_KEY = 'cc-language';
const THEME_KEY = 'cc-theme';
const TRACKER_KEY = 'pdh-tracker';
const NATIONAL_MAX = 999;

// ===== State =====
let currentLang = 'en';
let currentTheme = 'light';
let currentView = 'dashboard'; // dashboard | dex | guides
let currentDex = 'national';
let tracker = {}; // { "1": { national: true, sv: true, ... }, ... }
let searchQuery = '';
let filterStatus = 'all'; // all | caught | missing
let filterType = '';
let filterGen = '';
let sortBy = 'dexnum'; // dexnum | name
let viewMode = 'grid'; // grid | list

// ===== Init =====
function init() {
  loadTheme();
  loadLanguage();
  loadTracker();
  render();
  applyTheme();
}

// ===== Translation =====
function loadLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && T[saved]) currentLang = saved;
  else currentLang = (navigator.language || '').toLowerCase().startsWith('de') ? 'de' : 'en';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  render();
}

function t(key) {
  return (T[currentLang] && T[currentLang][key]) || T.en[key] || key;
}

function pokeName(p) {
  return p.name[currentLang] || p.name.en;
}

function typeName(type) {
  return t(TYPE_NAMES[type] || type);
}

function gameName(game) {
  return t(GAME_NAMES[game] || game);
}

// ===== Theme =====
function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') currentTheme = saved;
  else currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, currentTheme);
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// ===== Tracker =====
function loadTracker() {
  try {
    const saved = localStorage.getItem(TRACKER_KEY);
    if (saved) tracker = JSON.parse(saved);
  } catch (e) { tracker = {}; }
}

function saveTracker() {
  localStorage.setItem(TRACKER_KEY, JSON.stringify(tracker));
}

function isChecked(pokeId, game) {
  return tracker[pokeId] && tracker[pokeId][game] === true;
}

function isNationalChecked(pokeId) {
  if (!tracker[pokeId]) return false;
  // Auto-on if any game is checked
  for (const g of GAMES) {
    if (tracker[pokeId][g] === true) return true;
  }
  return tracker[pokeId].national === true;
}

function hasAnyGameChecked(pokeId) {
  if (!tracker[pokeId]) return false;
  for (const g of GAMES) {
    if (tracker[pokeId][g] === true) return true;
  }
  return false;
}

function toggleCheck(pokeId, game) {
  if (!tracker[pokeId]) tracker[pokeId] = {};
  tracker[pokeId][game] = !tracker[pokeId][game];
  saveTracker();
  render();
}

function toggleNational(pokeId) {
  if (hasAnyGameChecked(pokeId)) return; // Can't uncheck if game is checked
  if (!tracker[pokeId]) tracker[pokeId] = {};
  tracker[pokeId].national = !tracker[pokeId].national;
  saveTracker();
  render();
}

// ===== Counting =====
function countDex(dexKey) {
  const dex = DEXES[dexKey];
  if (!dex) return { caught: 0, total: 0 };
  const filtered = POKEMON.filter(dex.filter);
  let caught = 0;
  for (const p of filtered) {
    if (dexKey === 'national' || dexKey === 'all') {
      if (isNationalChecked(p.id)) caught++;
    } else if (dexKey === 'go') {
      if (isChecked(p.id, 'go')) caught++;
    } else {
      const gameKey = dex.gameKey;
      if (gameKey && isChecked(p.id, gameKey)) caught++;
    }
  }
  return { caught, total: filtered.length };
}

// How many dexes has this Pokemon been checked in?
function getDexCaughtCount(pokeId) {
  let count = 0;
  let total = 0;
  for (const [key, dex] of Object.entries(DEXES)) {
    if (key === 'all' || key === 'national') continue;
    const p = POKEMON.find(pk => pk.id === pokeId);
    if (!p) continue;
    if (!dex.filter(p)) continue;
    total++;
    if (dex.gameKey && isChecked(pokeId, dex.gameKey)) count++;
  }
  return { count, total };
}

// ===== Navigation =====
function navigate(view, dex) {
  currentView = view;
  if (dex) currentDex = dex;
  searchQuery = '';
  filterStatus = 'all';
  filterType = '';
  filterGen = '';
  render();
  window.scrollTo(0, 0);
}

// ===== Render =====
function render() {
  const app = document.getElementById('app');
  if (!app) return;

  // Apply language to static elements
  document.documentElement.lang = currentLang;
  document.title = t('siteTitle');
  document.querySelectorAll('.cc-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Render main content
  if (currentView === 'dashboard') {
    app.innerHTML = renderDashboard();
  } else if (currentView === 'dex') {
    app.innerHTML = renderDexView();
  }

  applyTheme();
}

// ===== Dashboard =====
function renderDashboard() {
  const natCount = countDex('national');
  const natPct = natCount.total > 0 ? Math.round((natCount.caught / natCount.total) * 100) : 0;

  let dexCards = '';
  for (const [key, dex] of Object.entries(DEXES)) {
    const count = countDex(key);
    const pct = count.total > 0 ? Math.round((count.caught / count.total) * 100) : 0;
    const isComplete = count.caught >= count.total;
    dexCards += `
      <div class="dash-card" onclick="navigate('dex','${key}')">
        <div class="dash-card-header">
          <span class="dash-card-icon">${dex.icon}</span>
          <span class="dash-card-name">${t(dex.nameKey)}</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill ${isComplete ? 'complete' : ''}" style="width:${pct}%"></div>
        </div>
        <div class="dash-card-count">${count.caught} / ${count.total}</div>
      </div>`;
  }

  return `
    <section class="cc-hero">
      <h1>${t('heroTitle')}</h1>
      <p>${t('heroDesc')}</p>
    </section>
    <section class="dash-national">
      <h2>${t('dashTotal')}: ${t('dexNational')}</h2>
      <div class="dash-national-count">${natCount.caught} <span class="total">/ ${natCount.total}</span></div>
      <div class="progress-bar-track large">
        <div class="progress-bar-fill ${natCount.caught >= natCount.total ? 'complete' : ''}" style="width:${natPct}%"></div>
      </div>
    </section>
    <section class="dash-grid">${dexCards}</section>
    <section class="dash-actions">
      <button class="cc-btn" onclick="exportData()">📥 ${t('exportBtn')}</button>
      <button class="cc-btn" onclick="document.getElementById('import-file').click()">📤 ${t('importBtn')}</button>
      <input type="file" id="import-file" accept=".json" style="display:none" onchange="importData(this)">
      <button class="cc-btn danger" onclick="resetAll()">🗑️ ${t('resetBtn')}</button>
    </section>`;
}

// ===== Dex View =====
function renderDexView() {
  const dex = DEXES[currentDex];
  if (!dex) return '';

  let pokemon = POKEMON.filter(dex.filter);

  // Search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    pokemon = pokemon.filter(p =>
      p.name.en.toLowerCase().includes(q) ||
      p.name.de.toLowerCase().includes(q) ||
      String(p.id).includes(q)
    );
  }

  // Filter by status
  if (filterStatus === 'caught') {
    if (currentDex === 'national' || currentDex === 'all') {
      pokemon = pokemon.filter(p => isNationalChecked(p.id));
    } else if (currentDex === 'go') {
      pokemon = pokemon.filter(p => isChecked(p.id, 'go'));
    } else {
      pokemon = pokemon.filter(p => dex.gameKey && isChecked(p.id, dex.gameKey));
    }
  } else if (filterStatus === 'missing') {
    if (currentDex === 'national' || currentDex === 'all') {
      pokemon = pokemon.filter(p => !isNationalChecked(p.id));
    } else if (currentDex === 'go') {
      pokemon = pokemon.filter(p => !isChecked(p.id, 'go'));
    } else {
      pokemon = pokemon.filter(p => !(dex.gameKey && isChecked(p.id, dex.gameKey)));
    }
  }

  // Filter by type
  if (filterType) {
    pokemon = pokemon.filter(p => p.types.includes(filterType));
  }

  // Filter by generation
  if (filterGen) {
    pokemon = pokemon.filter(p => p.gen === parseInt(filterGen));
  }

  // Sort
  if (sortBy === 'name') {
    pokemon.sort((a, b) => pokeName(a).localeCompare(pokeName(b)));
  } else {
    // Sort by dex number (regional if available, else national)
    const dexKey = currentDex === 'national' || currentDex === 'go' ? null : currentDex;
    pokemon.sort((a, b) => {
      const aNum = dexKey && a.dex[dexKey] ? a.dex[dexKey] : a.id;
      const bNum = dexKey && b.dex[dexKey] ? b.dex[dexKey] : b.id;
      return aNum - bNum;
    });
  }

  // Dex tabs
  let dexTabs = '';
  for (const [key, d] of Object.entries(DEXES)) {
    dexTabs += `<button class="dex-tab ${key === currentDex ? 'active' : ''}" onclick="navigate('dex','${key}')">${d.icon} ${t(d.nameKey)}</button>`;
  }

  // Type options
  const allTypes = Object.keys(TYPE_COLORS);
  let typeOptions = `<option value="">${t('filterType')}</option>`;
  allTypes.forEach(type => {
    typeOptions += `<option value="${type}" ${filterType === type ? 'selected' : ''}>${typeName(type)}</option>`;
  });

  // Gen options
  let genOptions = `<option value="">${t('filterGen')}</option>`;
  for (let g = 1; g <= 9; g++) {
    genOptions += `<option value="${g}" ${filterGen === String(g) ? 'selected' : ''}>Gen ${g}</option>`;
  }

  // Count
  const totalFiltered = POKEMON.filter(dex.filter).length;
  const count = countDex(currentDex);

  // Pokemon cards
  const dexKey = (currentDex === 'national' || currentDex === 'go' || currentDex === 'all') ? null : currentDex;
  const cards = pokemon.map(p => {
    const displayNum = dexKey && p.dex[dexKey] ? p.dex[dexKey] : p.id;
    const typesBadges = p.types.map(type =>
      `<span class="type-badge" style="background:${TYPE_COLORS[type]}">${typeName(type)}</span>`
    ).join('');

    // Caught status depends on view
    let cardClass = '';
    let checkMark = '';
    if (currentDex === 'all') {
      // "All" view: 3 states — not caught, partially caught (some dexes), fully caught (all dexes)
      const dexStatus = getDexCaughtCount(p.id);
      const natChecked = isNationalChecked(p.id);
      if (dexStatus.total > 0 && dexStatus.count >= dexStatus.total) {
        cardClass = 'caught-full';
        checkMark = '✓✓';
      } else if (natChecked || dexStatus.count > 0) {
        cardClass = 'caught-partial';
        checkMark = '✓';
      }
    } else if (currentDex === 'national') {
      if (isNationalChecked(p.id)) { cardClass = 'caught'; checkMark = '✓'; }
    } else if (currentDex === 'go') {
      if (isChecked(p.id, 'go')) { cardClass = 'caught'; checkMark = '✓'; }
    } else {
      // Regional dex: caught in THIS specific game only
      if (dex.gameKey && isChecked(p.id, dex.gameKey)) { cardClass = 'caught'; checkMark = '✓'; }
    }

    return `
      <div class="poke-card ${cardClass} ${viewMode}" onclick="openDetail(${p.id})">
        <div class="poke-card-num">#${String(displayNum).padStart(3, '0')}</div>
        <div class="poke-card-name">${pokeName(p)}</div>
        <div class="poke-card-types">${typesBadges}</div>
        <div class="poke-card-check">${checkMark}</div>
      </div>`;
  }).join('');

  return `
    <div class="dex-header">
      <button class="back-btn" onclick="navigate('dashboard')">← ${t('navDashboard')}</button>
      <div class="dex-progress">${count.caught} / ${count.total}</div>
    </div>
    <div class="dex-tabs-scroll"><div class="dex-tabs">${dexTabs}</div></div>
    <div class="dex-controls">
      <input type="text" class="search-input" placeholder="${t('searchPlaceholder')}" value="${searchQuery}" oninput="updateSearch(this.value)">
      <div class="dex-filters">
        <select class="filter-select" onchange="updateFilterStatus(this.value)">
          <option value="all" ${filterStatus === 'all' ? 'selected' : ''}>${t('filterAll')}</option>
          <option value="caught" ${filterStatus === 'caught' ? 'selected' : ''}>${t('filterCaught')}</option>
          <option value="missing" ${filterStatus === 'missing' ? 'selected' : ''}>${t('filterMissing')}</option>
        </select>
        <select class="filter-select" onchange="updateFilterType(this.value)">${typeOptions}</select>
        <select class="filter-select" onchange="updateFilterGen(this.value)">${genOptions}</select>
        <button class="sort-btn ${sortBy === 'dexnum' ? 'active' : ''}" onclick="updateSort('dexnum')">${t('sortDexNum')}</button>
        <button class="sort-btn ${sortBy === 'name' ? 'active' : ''}" onclick="updateSort('name')">${t('sortName')}</button>
        <button class="view-btn ${viewMode === 'grid' ? 'active' : ''}" onclick="updateView('grid')">${t('viewGrid')}</button>
        <button class="view-btn ${viewMode === 'list' ? 'active' : ''}" onclick="updateView('list')">${t('viewList')}</button>
      </div>
    </div>
    <div class="poke-grid ${viewMode}">${cards || '<div class="empty-state">No Pokémon found.</div>'}</div>
    <div id="detail-modal" class="modal" style="display:none"></div>`;
}

// ===== Filter/Sort Updates =====
function updateSearch(val) { searchQuery = val; render(); }
function updateFilterStatus(val) { filterStatus = val; render(); }
function updateFilterType(val) { filterType = val; render(); }
function updateFilterGen(val) { filterGen = val; render(); }
function updateSort(val) { sortBy = val; render(); }
function updateView(val) { viewMode = val; render(); }

// ===== Detail Modal =====
function openDetail(pokeId) {
  const p = POKEMON.find(pk => pk.id === pokeId);
  if (!p) return;

  const typesBadges = p.types.map(type =>
    `<span class="type-badge" style="background:${TYPE_COLORS[type]}">${typeName(type)}</span>`
  ).join('');

  // National dex status
  const natChecked = isNationalChecked(p.id);
  const hasGame = hasAnyGameChecked(p.id);
  const natDisabled = hasGame ? 'disabled' : '';
  const inNational = p.id <= NATIONAL_MAX;

  // Game checkboxes — only show games where this Pokemon is available
  let gameChecks = '';
  for (const g of GAMES) {
    // Determine if pokemon is in this game's dex
    let inGame = false;
    if (g === 'go') inGame = p.dex.go === true;
    else if (g === 'lgpe') inGame = p.dex.kanto !== null;
    else if (g === 'swsh') inGame = p.dex.galar !== null || p.dex.armor !== null || p.dex.crown !== null;
    else if (g === 'bdsp') inGame = p.dex.sinnoh !== null;
    else if (g === 'pla') inGame = p.dex.hisui !== null;
    else if (g === 'sv') inGame = p.dex.paldea !== null || p.dex.kitakami !== null || p.dex.blueberry !== null;
    const checked = isChecked(p.id, g);

    // Obtainability info
    let obtainHtml = '';
    const obtainData = OBTAIN[p.id] && OBTAIN[p.id][g];
    if (obtainData && inGame) {
      const note = obtainData.n ? (obtainData.n[currentLang] || obtainData.n.en) : '';
      const methodIcon = { catch: '🌿', evolve: '🔄', starter: '⭐', static: '✨', breed: '🥚', gift: '🎁', raid: '⚔️', trade: '🔀' }[obtainData.m] || '📌';
      obtainHtml = `<div class="obtain-info">${methodIcon} ${note}</div>`;
    }

    gameChecks += `
      <div class="detail-game-row ${inGame ? '' : 'unavailable'}">
        <label class="detail-game">
          <input type="checkbox" ${checked ? 'checked' : ''} ${inGame ? '' : 'disabled'}
            onchange="event.stopPropagation(); toggleCheck(${p.id}, '${g}')">
          <span>${gameName(g)}</span>
          ${!inGame ? `<span class="unavail-hint">(${t('detailNotAvailable')})</span>` : ''}
        </label>
        ${obtainHtml}
      </div>`;
  }

  const modal = document.getElementById('detail-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeDetail()"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="closeDetail()">✕</button>
      <div class="detail-header">
        <span class="detail-num">#${String(p.id).padStart(3, '0')}</span>
        <h2 class="detail-name">${pokeName(p)}</h2>
        <div class="detail-types">${typesBadges}</div>
      </div>
      ${inNational ? `
      <div class="detail-national">
        <label class="detail-national-check">
          <input type="checkbox" ${natChecked ? 'checked' : ''} ${natDisabled}
            onchange="event.stopPropagation(); toggleNational(${p.id})">
          <span>${t('detailNationalStatus')}</span>
          ${hasGame ? '<span class="auto-hint">(auto)</span>' : ''}
        </label>
      </div>` : ''}
      <div class="detail-games">
        <h3>${t('detailObtainedIn')}</h3>
        ${gameChecks}
      </div>
    </div>`;
  modal.style.display = 'flex';
}

function closeDetail() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.style.display = 'none';
}

// ===== Export/Import =====
function exportData() {
  const data = {
    version: 1,
    exportDate: new Date().toISOString(),
    tracker: tracker
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pokedex-home-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  if (!confirm(t('importConfirm'))) { input.value = ''; return; }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.tracker) {
        tracker = data.tracker;
        saveTracker();
        render();
        alert(t('importSuccess'));
      } else {
        alert(t('importError'));
      }
    } catch (err) {
      alert(t('importError'));
    }
    input.value = '';
  };
  reader.readAsText(file);
}

// ===== Reset =====
function resetAll() {
  if (!confirm(t('resetConfirm'))) return;
  tracker = {};
  saveTracker();
  render();
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
// Close modal on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });
