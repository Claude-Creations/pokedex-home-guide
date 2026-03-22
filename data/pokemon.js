// ===== Pokemon Data (Placeholder — ~20 Pokemon for testing) =====
// Full dataset will be compiled from PokeAPI in Phase 2
// dex values: regional dex number or null if not in that dex
const POKEMON = [
  { id: 1,   name: { en: 'Bulbasaur',  de: 'Bisasam' },      types: ['grass','poison'],   gen: 1, dex: { kanto: 1,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 71,  go: true } },
  { id: 2,   name: { en: 'Ivysaur',    de: 'Bisaknosp' },     types: ['grass','poison'],   gen: 1, dex: { kanto: 2,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 72,  go: true } },
  { id: 3,   name: { en: 'Venusaur',   de: 'Bisaflor' },      types: ['grass','poison'],   gen: 1, dex: { kanto: 3,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 73,  go: true } },
  { id: 4,   name: { en: 'Charmander', de: 'Glumanda' },      types: ['fire'],             gen: 1, dex: { kanto: 4,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 74,  go: true } },
  { id: 5,   name: { en: 'Charmeleon', de: 'Glutexo' },       types: ['fire'],             gen: 1, dex: { kanto: 5,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 75,  go: true } },
  { id: 6,   name: { en: 'Charizard',  de: 'Glurak' },        types: ['fire','flying'],    gen: 1, dex: { kanto: 6,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 76,  go: true } },
  { id: 7,   name: { en: 'Squirtle',   de: 'Schiggy' },       types: ['water'],            gen: 1, dex: { kanto: 7,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 77,  go: true } },
  { id: 8,   name: { en: 'Wartortle',  de: 'Schillok' },      types: ['water'],            gen: 1, dex: { kanto: 8,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 78,  go: true } },
  { id: 9,   name: { en: 'Blastoise',  de: 'Turtok' },        types: ['water'],            gen: 1, dex: { kanto: 9,   galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 79,  go: true } },
  { id: 25,  name: { en: 'Pikachu',    de: 'Pikachu' },       types: ['electric'],         gen: 1, dex: { kanto: 25,  galar: 194, armor: null, crown: null, hisui: null, sinnoh: 104, paldea: 74,  kitakami: null, blueberry: null, go: true } },
  { id: 26,  name: { en: 'Raichu',     de: 'Raichu' },        types: ['electric'],         gen: 1, dex: { kanto: 26,  galar: 195, armor: null, crown: null, hisui: null, sinnoh: 105, paldea: 75,  kitakami: null, blueberry: null, go: true } },
  { id: 133, name: { en: 'Eevee',      de: 'Evoli' },         types: ['normal'],           gen: 1, dex: { kanto: 133, galar: 196, armor: null, crown: null, hisui: null, sinnoh: null, paldea: 184, kitakami: null, blueberry: null, go: true } },
  { id: 150, name: { en: 'Mewtwo',     de: 'Mewtu' },         types: ['psychic'],          gen: 1, dex: { kanto: 150, galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: null, go: true } },
  { id: 393, name: { en: 'Piplup',     de: 'Plinfa' },        types: ['water'],            gen: 4, dex: { kanto: null,galar: null, armor: null, crown: null, hisui: null, sinnoh: 7,   paldea: null, kitakami: null, blueberry: null, go: true } },
  { id: 448, name: { en: 'Lucario',    de: 'Lucario' },       types: ['fighting','steel'], gen: 4, dex: { kanto: null,galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: 299, kitakami: null, blueberry: null, go: true } },
  { id: 658, name: { en: 'Greninja',   de: 'Quajutsu' },      types: ['water','dark'],     gen: 6, dex: { kanto: null,galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: 186, go: true } },
  { id: 700, name: { en: 'Sylveon',    de: 'Feelinara' },     types: ['fairy'],            gen: 6, dex: { kanto: null,galar: 204, armor: null, crown: null, hisui: null, sinnoh: null, paldea: 192, kitakami: null, blueberry: null, go: true } },
  { id: 890, name: { en: 'Eternatus',  de: 'Endynalos' },     types: ['poison','dragon'],  gen: 8, dex: { kanto: null,galar: 400, armor: null, crown: null, hisui: null, sinnoh: null, paldea: null, kitakami: null, blueberry: null, go: false } },
  { id: 906, name: { en: 'Sprigatito', de: 'Felori' },        types: ['grass'],            gen: 9, dex: { kanto: null,galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: 1,   kitakami: null, blueberry: null, go: false } },
  { id: 999, name: { en: 'Gimmighoul', de: 'Gierspenst' },    types: ['ghost'],            gen: 9, dex: { kanto: null,galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: 391, kitakami: null, blueberry: null, go: true } },
  { id: 1000,name: { en: 'Gholdengo',  de: 'Monetigo' },      types: ['steel','ghost'],    gen: 9, dex: { kanto: null,galar: null, armor: null, crown: null, hisui: null, sinnoh: null, paldea: 392, kitakami: null, blueberry: null, go: false } },
];

// Dex definitions
const DEXES = {
  all:       { nameKey: 'dexAll',       icon: '📋', gameKey: null,   total: POKEMON.length, filter: () => true },
  national:  { nameKey: 'dexNational',  icon: '🌍', gameKey: null,   total: 999,  filter: p => p.id <= 999 },
  kanto:     { nameKey: 'dexKanto',     icon: '🔴', gameKey: 'lgpe', total: 150,  filter: p => p.dex.kanto !== null },
  sinnoh:    { nameKey: 'dexSinnoh',    icon: '💎', gameKey: 'bdsp', total: 150,  filter: p => p.dex.sinnoh !== null },
  galar:     { nameKey: 'dexGalar',     icon: '⚔️', gameKey: 'swsh', total: 400,  filter: p => p.dex.galar !== null },
  armor:     { nameKey: 'dexArmor',     icon: '🛡️', gameKey: 'swsh', total: 210,  filter: p => p.dex.armor !== null },
  crown:     { nameKey: 'dexCrown',     icon: '👑', gameKey: 'swsh', total: 210,  filter: p => p.dex.crown !== null },
  hisui:     { nameKey: 'dexHisui',     icon: '⛰️', gameKey: 'pla',  total: 242,  filter: p => p.dex.hisui !== null },
  paldea:    { nameKey: 'dexPaldea',    icon: '🟣', gameKey: 'sv',   total: 400,  filter: p => p.dex.paldea !== null },
  kitakami:  { nameKey: 'dexKitakami',  icon: '🎭', gameKey: 'sv',   total: 200,  filter: p => p.dex.kitakami !== null },
  blueberry: { nameKey: 'dexBlueberry', icon: '🫐', gameKey: 'sv',   total: 240,  filter: p => p.dex.blueberry !== null },
  go:        { nameKey: 'dexGo',        icon: '📱', gameKey: 'go',   total: 1024, filter: p => p.dex.go === true },
};

// Game keys for tracker checkboxes
const GAMES = ['lgpe', 'swsh', 'bdsp', 'pla', 'sv', 'go', 'other'];

// Type colors for badges
const TYPE_COLORS = {
  normal:   '#A8A77A', fire:     '#EE8130', water:    '#6390F0', electric: '#F7D02C',
  grass:    '#7AC74C', ice:      '#96D9D6', fighting: '#C22E28', poison:   '#A33EA1',
  ground:   '#E2BF65', flying:   '#A98FF3', psychic:  '#F95587', bug:      '#A6B91A',
  rock:     '#B6A136', ghost:    '#735797', dragon:   '#6F35FC', dark:     '#705746',
  steel:    '#B7B7CE', fairy:    '#D685AD',
};
