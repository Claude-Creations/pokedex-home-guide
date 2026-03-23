// ===== Constants =====
const LANG_KEY = 'cc-language';
const THEME_KEY = 'cc-theme';
const TRACKER_KEY = 'pdh-tracker';
const FORMS_KEY = 'pdh-forms';
const NATIONAL_MAX = 999;

// ===== State =====
let currentLang = 'en';
let currentTheme = 'light';
let currentView = 'dashboard'; // dashboard | dex | guides
let currentDex = 'national';
let tracker = {}; // { "1": { national: true, sv: true, ... }, ... }
let forms = {};   // { "50-alolan": true, "50-normal": true, ... }
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
  try {
    const saved = localStorage.getItem(FORMS_KEY);
    if (saved) forms = JSON.parse(saved);
  } catch (e) { forms = {}; }
}

function saveTracker() {
  localStorage.setItem(TRACKER_KEY, JSON.stringify(tracker));
  localStorage.setItem(FORMS_KEY, JSON.stringify(forms));
}

function isChecked(pokeId, game) {
  return tracker[pokeId] && tracker[pokeId][game] === true;
}

// Check if a Pokemon has the required form for a specific dex
function hasRequiredForm(pokeId, dexKey) {
  const req = FORM_REQUIREMENTS[dexKey];
  if (!req || !req[pokeId]) return true; // No form requirement = any form counts
  const requiredForm = req[pokeId];
  return forms[`${pokeId}-${requiredForm}`] === true;
}

// Check if Pokemon counts as caught for a specific dex
function isDexCaught(pokeId, dexKey) {
  const dex = DEXES[dexKey];
  if (!dex) return false;
  if (dexKey === 'all' || dexKey === 'national') return isNationalChecked(pokeId);
  if (dexKey === 'go') return isChecked(pokeId, 'go');
  // For regional dexes: game must be checked AND form requirement met
  if (!dex.gameKey || !isChecked(pokeId, dex.gameKey)) return false;
  return hasRequiredForm(pokeId, dexKey);
}

function isNationalChecked(pokeId) {
  if (!tracker[pokeId]) return false;
  // Auto-on if any game is checked
  for (const g of GAMES) {
    if (tracker[pokeId][g] === true) return true;
  }
  return tracker[pokeId].national === true;
}

function isFormOwned(pokeId, form) {
  return forms[`${pokeId}-${form}`] === true;
}

function toggleForm(pokeId, form) {
  const key = `${pokeId}-${form}`;
  forms[key] = !forms[key];
  saveTracker();
  // Re-render detail
  openDetail(pokeId);
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
    if (isDexCaught(p.id, dexKey)) caught++;
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
    if (isDexCaught(pokeId, key)) count++;
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
  } else if (currentView === 'guides') {
    app.innerHTML = renderGuides();
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
      <button class="cc-btn primary" onclick="navigate('guides')">📚 ${t('navGuides')}</button>
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
  const count = countDex(currentDex);

  return `
    <div class="dex-sticky-top">
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
    </div>
    <div class="poke-grid ${viewMode}">${buildCards(dex)}</div>
    <div class="dex-bottom-bar">
      <button class="cc-btn" onclick="exportData()">📥 ${t('exportBtn')}</button>
      <button class="cc-btn" onclick="document.getElementById('import-file-dex').click()">📤 ${t('importBtn')}</button>
      <input type="file" id="import-file-dex" accept=".json" style="display:none" onchange="importData(this)">
    </div>
    <div id="detail-modal" class="modal" style="display:none"></div>`;
}

// ===== Build Pokemon Cards (used by both full render and partial update) =====
function buildCards(dex) {
  let pokemon = POKEMON.filter(dex.filter);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    pokemon = pokemon.filter(p =>
      p.name.en.toLowerCase().includes(q) ||
      p.name.de.toLowerCase().includes(q) ||
      String(p.id).includes(q)
    );
  }

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

  if (filterType) pokemon = pokemon.filter(p => p.types.includes(filterType));
  if (filterGen) pokemon = pokemon.filter(p => p.gen === parseInt(filterGen));

  if (sortBy === 'name') {
    pokemon.sort((a, b) => pokeName(a).localeCompare(pokeName(b)));
  } else {
    const dk = (currentDex === 'national' || currentDex === 'go' || currentDex === 'all') ? null : currentDex;
    pokemon.sort((a, b) => {
      const aNum = dk && a.dex[dk] ? a.dex[dk] : a.id;
      const bNum = dk && b.dex[dk] ? b.dex[dk] : b.id;
      return aNum - bNum;
    });
  }

  if (pokemon.length === 0) return '<div class="empty-state">No Pokémon found.</div>';

  const dexKey = (currentDex === 'national' || currentDex === 'go' || currentDex === 'all') ? null : currentDex;
  return pokemon.map(p => {
    const displayNum = dexKey && p.dex[dexKey] ? p.dex[dexKey] : p.id;
    const typesBadges = p.types.map(type =>
      `<span class="type-badge" style="background:${TYPE_COLORS[type]}">${typeName(type)}</span>`
    ).join('');

    let cardClass = '';
    let checkMark = '';
    if (currentDex === 'all') {
      const dexStatus = getDexCaughtCount(p.id);
      const natChecked = isNationalChecked(p.id);
      if (dexStatus.total > 0 && dexStatus.count >= dexStatus.total) { cardClass = 'caught-full'; checkMark = '✓✓'; }
      else if (natChecked || dexStatus.count > 0) { cardClass = 'caught-partial'; checkMark = '✓'; }
    } else {
      if (isDexCaught(p.id, currentDex)) { cardClass = 'caught'; checkMark = '✓'; }
    }

    return `
      <div class="poke-card ${cardClass} ${viewMode}" onclick="openDetail(${p.id})">
        <div class="poke-card-num">#${String(displayNum).padStart(3, '0')}</div>
        <div class="poke-card-name">${pokeName(p)}</div>
        <div class="poke-card-types">${typesBadges}</div>
        <div class="poke-card-check">${checkMark}</div>
      </div>`;
  }).join('');
}

// ===== Filter/Sort Updates =====
// renderList() only re-renders the pokemon grid + progress, keeping controls focused
function renderList() {
  if (currentView !== 'dex') return render();
  const dex = DEXES[currentDex];
  if (!dex) return;
  const count = countDex(currentDex);
  const progEl = document.querySelector('.dex-progress');
  if (progEl) progEl.textContent = `${count.caught} / ${count.total}`;
  const grid = document.querySelector('.poke-grid');
  if (grid) {
    grid.className = `poke-grid ${viewMode}`;
    grid.innerHTML = buildCards(dex);
  }
}

function updateSearch(val) { searchQuery = val; renderList(); }
function updateFilterStatus(val) { filterStatus = val; renderList(); }
function updateFilterType(val) { filterType = val; renderList(); }
function updateFilterGen(val) { filterGen = val; renderList(); }
function updateSort(val) { sortBy = val; renderList(); }
function updateView(val) { viewMode = val; renderList(); }

// ===== Wiki Links =====
function wikiUrl(p) {
  if (currentLang === 'de') {
    return 'https://www.pokewiki.de/' + encodeURIComponent(p.name.de);
  }
  return 'https://bulbapedia.bulbagarden.net/wiki/' + encodeURIComponent(p.name.en) + '_(Pok%C3%A9mon)';
}

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

  // Determine which games to show based on current dex context
  // Regional dex → only that dex's game. National/All → all games.
  const showAllGames = currentDex === 'national' || currentDex === 'all';
  const dexGameKey = DEXES[currentDex]?.gameKey; // e.g. 'lgpe' for kanto, 'sv' for paldea

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

    // In regional dex view, only show the relevant game
    if (!showAllGames && g !== dexGameKey) continue;

    const checked = isChecked(p.id, g);

    // Obtainability info — show all methods (easiest first)
    let obtainHtml = '';
    const obtainData = OBTAIN[p.id] && OBTAIN[p.id][g];
    if (obtainData && inGame) {
      const METHOD_ICONS = { catch: '🌿', evolve: '🔄', starter: '⭐', static: '✨', breed: '🥚', gift: '🎁', raid: '⚔️', trade: '🔀' };
      const note = obtainData.n ? (obtainData.n[currentLang] || obtainData.n.en) : '';
      const icon = METHOD_ICONS[obtainData.m] || '📌';
      obtainHtml = `<div class="obtain-info">${icon} ${note}</div>`;
      // If this is an evolution but also has a wild location, show the wild location too
      // If this is a wild catch but also evolves from something, show evolution path too
      if (obtainData.alt) {
        for (const alt of obtainData.alt) {
          const altNote = alt.n ? (alt.n[currentLang] || alt.n.en) : '';
          const altIcon = METHOD_ICONS[alt.m] || '📌';
          obtainHtml += `<div class="obtain-info obtain-alt">${altIcon} ${altNote}</div>`;
        }
      }
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
        <h2 class="detail-name">${pokeName(p)} <a href="${wikiUrl(p)}" target="_blank" rel="noopener" class="wiki-link" title="${currentLang === 'de' ? 'PokéWiki' : 'Bulbapedia'}">↗</a></h2>
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
      ${renderFormSection(p)}
      <div class="detail-games">
        <h3>${t('detailObtainedIn')}</h3>
        ${gameChecks}
      </div>
    </div>`;
  modal.style.display = 'flex';
}

function formDisplayName(form) {
  const key = 'form' + form.charAt(0).toUpperCase() + form.slice(1);
  return t(key) || form;
}

function renderFormSection(p) {
  const pf = POKEMON_FORMS[p.id];
  if (!pf) return ''; // No regional forms

  // Show which form is required for current dex
  let reqNote = '';
  const req = FORM_REQUIREMENTS[currentDex];
  if (req && req[p.id]) {
    const reqForm = req[p.id];
    const owned = isFormOwned(p.id, reqForm);
    reqNote = `<div class="form-required ${owned ? 'owned' : 'missing'}">
      ⚠️ ${t('formRequired')} <strong>${formDisplayName(reqForm)}</strong>
      ${owned ? '✓' : '✗'}
    </div>`;
  }

  const formChecks = pf.forms.map(form => {
    const owned = isFormOwned(p.id, form);
    return `<label class="form-check ${owned ? 'owned' : ''}">
      <input type="checkbox" ${owned ? 'checked' : ''}
        onchange="event.stopPropagation(); toggleForm(${p.id}, '${form}')">
      <span>${formDisplayName(form)}</span>
    </label>`;
  }).join('');

  return `<div class="detail-forms">
    ${reqNote}
    <div class="form-checks">
      <span class="form-label">${t('formOwned')}</span>
      ${formChecks}
    </div>
  </div>`;
}

function closeDetail() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.style.display = 'none';
}

// ===== Guides View =====
function renderGuides() {
  let content = `
    <div class="dex-header">
      <button class="back-btn" onclick="navigate('dashboard')">← ${t('navDashboard')}</button>
    </div>
    <h1 class="guides-title">📚 ${t('navGuides')}</h1>`;

  for (const [gameKey, guide] of Object.entries(GUIDES)) {
    const title = guide.title[currentLang] || guide.title.en;
    let sections = '';
    for (const section of guide.sections) {
      const sTitle = section.title[currentLang] || section.title.en;
      const items = section.items.map(item => {
        const text = item[currentLang] || item.en;
        return `<li>${text}</li>`;
      }).join('');
      sections += `
        <div class="guide-section">
          <h3>${sTitle}</h3>
          <ul>${items}</ul>
        </div>`;
    }
    content += `
      <div class="guide-card">
        <div class="guide-card-header" onclick="this.parentElement.classList.toggle('open')">
          <span>${guide.icon} ${title}</span>
          <span class="guide-toggle-icon">▼</span>
        </div>
        <div class="guide-card-body">${sections}</div>
      </div>`;
  }

  return content;
}

// ===== Export/Import =====
function exportData() {
  const data = {
    version: 2,
    exportDate: new Date().toISOString(),
    tracker: tracker,
    forms: forms
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
        if (data.forms) forms = data.forms;
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
