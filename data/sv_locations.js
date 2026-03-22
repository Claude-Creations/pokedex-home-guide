// ===== Scarlet/Violet Location Data — Extracted from Serebii.net =====
// Maps National Dex ID → array of location strings where the Pokemon can be found
// Source: serebii.net/pokearth/paldea/ area pages
// Generated: 2026-03-22

const SV_LOCATIONS = {
  // === Paldea Pokedex Pokemon ===

  // #025 Pikachu
  25: ["South Province (Area Two)", "South Province (Area Four)", "West Province (Area Three)", "East Province (Area One)"],
  // #026 Raichu
  26: ["Area Zero"],
  // #027 Sandshrew
  27: ["Kitakami"],
  // #028 Sandslash
  28: ["Kitakami"],
  // #035 Clefairy
  35: ["Kitakami"],
  // #036 Clefable
  36: ["Kitakami"],
  // #037 Vulpix
  37: ["Kitakami"],
  // #038 Ninetales
  38: ["Kitakami"],
  // #039 Jigglypuff
  39: ["South Province (Area Two)", "West Province (Area Three)"],
  // #040 Wigglytuff
  40: ["North Province (Area One)"],
  // #043 Oddish
  43: ["Blueberry Academy (Terarium)"],
  // #044 Gloom
  44: ["Blueberry Academy (Terarium)"],
  // #045 Vileplume
  45: ["Blueberry Academy (Terarium)"],
  // #048 Venonat
  48: ["Tagtree Thicket", "North Province (Area Two)", "Area Zero", "Casseroya Lake"],
  // #049 Venomoth
  49: ["Tagtree Thicket", "North Province (Area Two)", "Area Zero", "Casseroya Lake"],
  // #050 Diglett
  50: ["South Province (Area Two)", "Asado Desert", "East Province (Area Three)", "Inlet Grotto", "Alfornada Cavern"],
  // #051 Dugtrio
  51: ["South Province (Area Two)", "Asado Desert", "East Province (Area Three)", "Dalizapa Passage", "North Province (Area Three)", "Alfornada Cavern", "Area Zero"],
  // #052 Meowth
  52: ["East Province (Area Three)", "West Province (Area Three)"],
  // #053 Persian
  53: ["South Province (Area Four)", "West Province (Area Three)"],
  // #054 Psyduck
  54: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Four)", "South Province (Area Five)", "South Province (Area Six)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "Tagtree Thicket", "Glaseado Mountain", "Casseroya Lake", "Area Zero"],
  // #055 Golduck
  55: ["South Province (Area Six)", "North Province (Area One)", "North Province (Area Three)", "Casseroya Lake", "Area Zero"],
  // #056 Mankey
  56: ["South Province (Area One)", "South Province (Area Five)", "West Province (Area One)"],
  // #057 Primeape
  57: ["South Province (Area Four)", "North Province (Area One)", "West Province (Area One)", "Area Zero"],
  // #058 Growlithe
  58: ["South Province (Area Three)", "South Province (Area Five)", "East Province (Area Three)", "North Province (Area Two)"],
  // #059 Arcanine
  59: ["North Province (Area Two)", "East Province (Area Three)"],
  // #060 Poliwag
  60: ["Kitakami"],
  // #061 Poliwhirl
  61: ["Kitakami"],
  // #062 Poliwrath
  62: ["Kitakami"],
  // #069 Bellsprout
  69: ["Kitakami"],
  // #070 Weepinbell
  70: ["Kitakami"],
  // #071 Victreebel
  71: ["Kitakami"],
  // #072 Tentacool
  72: ["Blueberry Academy (Terarium)"],
  // #073 Tentacruel
  73: ["Blueberry Academy (Terarium)"],
  // #074 Geodude
  74: ["Kitakami"],
  // #075 Graveler
  75: ["Kitakami"],
  // #076 Golem
  76: ["Kitakami"],
  // #079 Slowpoke
  79: ["South Province (Area One)", "South Province (Area Five)", "East Province (Area Two)"],
  // #080 Slowbro
  80: ["West Province (Area Two)", "Casseroya Lake"],
  // #081 Magnemite
  81: ["East Province (Area Two)", "East Province (Area Three)"],
  // #082 Magneton
  82: ["Glaseado Mountain", "Dalizapa Passage"],
  // #084 Doduo
  84: ["Blueberry Academy (Terarium)"],
  // #085 Dodrio
  85: ["Blueberry Academy (Terarium)"],
  // #086 Seel
  86: ["Blueberry Academy (Terarium)"],
  // #087 Dewgong
  87: ["Blueberry Academy (Terarium)"],
  // #088 Grimer
  88: ["East Province (Area Three)"],
  // #089 Muk
  89: ["East Province (Area Three)"],
  // #090 Shellder
  90: ["East Paldean Sea"],
  // #091 Cloyster
  91: ["East Paldean Sea", "North Paldean Sea"],
  // #092 Gastly
  92: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)", "East Province (Area Two)", "East Province (Area Three)"],
  // #093 Haunter
  93: ["Glaseado Mountain", "Dalizapa Passage", "North Province (Area One)"],
  // #094 Gengar
  94: ["Evolve Haunter (Trade)"],
  // #096 Drowzee
  96: ["South Province (Area Two)", "South Province (Area Five)"],
  // #097 Hypno
  97: ["South Province (Area Six)", "West Province (Area One)", "North Province (Area Three)", "Dalizapa Passage", "Area Zero"],
  // #100 Voltorb
  100: ["East Province (Area Three)", "West Province (Area Three)"],
  // #101 Electrode
  101: ["West Province (Area Three)"],
  // #102 Exeggcute
  102: ["Blueberry Academy (Terarium)"],
  // #103 Exeggutor
  103: ["Blueberry Academy (Terarium)"],
  // #109 Koffing
  109: ["Kitakami"],
  // #110 Weezing
  110: ["Kitakami"],
  // #111 Rhyhorn
  111: ["Blueberry Academy (Terarium)"],
  // #112 Rhydon
  112: ["Blueberry Academy (Terarium)"],
  // #113 Chansey
  113: ["South Province (Area Four)", "South Province (Area Six)", "West Province (Area Two)", "West Province (Area Three)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Casseroya Lake", "Area Zero"],
  // #116 Horsea
  116: ["Blueberry Academy (Terarium)"],
  // #117 Seadra
  117: ["Blueberry Academy (Terarium)"],
  // #123 Scyther
  123: ["South Province (Area Four)", "South Province (Area Six)", "North Province (Area Two)", "Casseroya Lake", "Area Zero"],
  // #125 Electabuzz
  125: ["Blueberry Academy (Terarium)"],
  // #126 Magmar
  126: ["Blueberry Academy (Terarium)"],
  // #128 Tauros
  128: ["West Province (Area Two)", "East Province (Area One)"],
  // #129 Magikarp
  129: ["South Province (Area One)", "South Province (Area Four)", "South Province (Area Five)", "South Province (Area Six)", "East Province (Area Three)", "West Province (Area Two)", "West Province (Area Three)", "Tagtree Thicket", "Glaseado Mountain", "Dalizapa Passage", "Casseroya Lake"],
  // #130 Gyarados
  130: ["East Paldean Sea", "West Paldean Sea", "North Paldean Sea", "Casseroya Lake", "South Province (Area Six)"],
  // #131 Lapras
  131: ["Blueberry Academy (Terarium)"],
  // #132 Ditto
  132: ["West Province (Area Two)", "West Province (Area Three)"],
  // #133 Eevee
  133: ["South Province (Area Two)", "South Province (Area Five)", "West Province (Area Three)"],
  // #134 Vaporeon
  134: ["South Province (Area Six)", "North Province (Area One)", "North Province (Area Three)", "Casseroya Lake", "Glaseado Mountain", "Area Zero"],
  // #135 Jolteon
  135: ["West Province (Area Three)"],
  // #136 Flareon
  136: ["Dalizapa Passage", "North Province (Area Two)"],
  // #137 Porygon
  137: ["Blueberry Academy (Terarium)"],
  // #143 Snorlax
  143: ["Kitakami"],
  // #147 Dratini
  147: ["North Province (Area Two)", "Casseroya Lake"],
  // #148 Dragonair
  148: ["Casseroya Lake"],
  // #149 Dragonite
  149: ["North Province (Area Two)", "Casseroya Lake"],
  // #163 Hoothoot
  163: ["Kitakami"],
  // #164 Noctowl
  164: ["Kitakami"],
  // #167 Spinarak
  167: ["Kitakami"],
  // #168 Ariados
  168: ["Kitakami"],
  // #170 Chinchou
  170: ["Blueberry Academy (Terarium)"],
  // #171 Lanturn
  171: ["Blueberry Academy (Terarium)"],
  // #172 Pichu
  172: ["South Province (Area One)", "South Province (Area Two)"],
  // #173 Cleffa
  173: ["Kitakami"],
  // #174 Igglybuff
  174: ["South Province (Area One)", "South Province (Area Two)"],
  // #179 Mareep
  179: ["South Province (Area Two)"],
  // #180 Flaaffy
  180: ["South Province (Area Four)", "West Province (Area Two)"],
  // #181 Ampharos
  181: ["North Province (Area One)", "Alfornada Cavern"],
  // #182 Bellossom
  182: ["Blueberry Academy (Terarium)"],
  // #183 Marill
  183: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Four)", "South Province (Area Five)"],
  // #184 Azumarill
  184: ["West Province (Area Two)", "Casseroya Lake"],
  // #185 Sudowoodo
  185: ["West Province (Area Three)", "Socarrat Trail"],
  // #186 Politoed
  186: ["Kitakami"],
  // #187 Hoppip
  187: ["South Province (Area One)", "South Province (Area Two)"],
  // #188 Skiploom
  188: ["South Province (Area Three)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)"],
  // #189 Jumpluff
  189: ["West Province (Area Three)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Area Zero"],
  // #190 Aipom
  190: ["Kitakami"],
  // #191 Sunkern
  191: ["South Province (Area One)", "South Province (Area Two)"],
  // #192 Sunflora
  192: ["South Province (Area Six)", "North Province (Area Two)", "North Province (Area Three)", "Tagtree Thicket", "East Paldean Sea"],
  // #193 Yanma
  193: ["Kitakami"],
  // #194 Wooper (Paldean)
  194: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Four)", "South Province (Area Five)"],
  // #196 Espeon
  196: ["North Province (Area Three)", "Area Zero"],
  // #197 Umbreon
  197: ["Dalizapa Passage", "North Province (Area Two)", "North Province (Area Three)", "Alfornada Cavern", "Area Zero"],
  // #198 Murkrow
  198: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "Tagtree Thicket", "Area Zero"],
  // #199 Slowking
  199: ["Evolve Slowpoke (King's Rock trade)"],
  // #200 Misdreavus
  200: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Two)", "Tagtree Thicket", "Glaseado Mountain", "Dalizapa Passage"],
  // #203 Girafarig
  203: ["West Province (Area Two)", "West Province (Area Three)"],
  // #204 Pineco
  204: ["South Province (Area Four)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area Three)"],
  // #205 Forretress
  205: ["Socarrat Trail", "Casseroya Lake", "North Province (Area Two)"],
  // #206 Dunsparce
  206: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)", "South Province (Area Six)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "Asado Desert", "Dalizapa Passage", "Alfornada Cavern", "Area Zero"],
  // #207 Gligar
  207: ["Kitakami"],
  // #209 Snubbull
  209: ["Blueberry Academy (Terarium)"],
  // #210 Granbull
  210: ["Blueberry Academy (Terarium)"],
  // #211 Qwilfish
  211: ["East Paldean Sea", "West Paldean Sea", "North Paldean Sea"],
  // #212 Scizor
  212: ["Evolve Scyther (Metal Coat trade)"],
  // #214 Heracross
  214: ["Socarrat Trail", "Cortondo"],
  // #215 Sneasel
  215: ["Glaseado Mountain", "Dalizapa Passage", "Area Zero"],
  // #216 Teddiursa
  216: ["East Province (Area One)", "Cortondo"],
  // #217 Ursaring
  217: ["North Province (Area One)", "North Province (Area Two)", "West Province (Area Three)", "Dalizapa Passage", "Cortondo"],
  // #218 Slugma
  218: ["Kitakami"],
  // #219 Magcargo
  219: ["Kitakami"],
  // #220 Swinub
  220: ["Kitakami"],
  // #221 Piloswine
  221: ["Kitakami"],
  // #225 Delibird
  225: ["Glaseado Mountain"],
  // #227 Skarmory
  227: ["Blueberry Academy (Terarium)"],
  // #228 Houndour
  228: ["South Province (Area Four)", "Inlet Grotto"],
  // #229 Houndoom
  229: ["South Province (Area Four)", "North Province (Area Two)"],
  // #230 Kingdra
  230: ["Blueberry Academy (Terarium)"],
  // #231 Phanpy
  231: ["South Province (Area Two)", "South Province (Area Four)", "South Province (Area Five)", "West Province (Area One)", "Dalizapa Passage", "Area Zero"],
  // #232 Donphan
  232: ["South Province (Area Four)", "South Province (Area Six)", "Asado Desert", "Dalizapa Passage", "Area Zero"],
  // #233 Porygon2
  233: ["Blueberry Academy (Terarium)"],
  // #234 Stantler
  234: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)"],
  // #235 Smeargle
  235: ["Blueberry Academy (Terarium)"],
  // #236 Tyrogue
  236: ["Blueberry Academy (Terarium)"],
  // #239 Elekid
  239: ["Blueberry Academy (Terarium)"],
  // #240 Magby
  240: ["Blueberry Academy (Terarium)"],
  // #242 Blissey
  242: ["North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Area Zero"],
  // #246 Larvitar
  246: ["South Province (Area Five)", "Asado Desert", "East Province (Area Three)", "Dalizapa Passage", "Alfornada Cavern", "Area Zero"],
  // #247 Pupitar
  247: ["Alfornada Cavern"],
  // #248 Tyranitar
  248: ["Evolve Pupitar (Lv. 55)"],
  // #261 Poochyena
  261: ["Kitakami"],
  // #262 Mightyena
  262: ["Kitakami"],
  // #270 Lotad
  270: ["Kitakami"],
  // #271 Lombre
  271: ["Kitakami"],
  // #272 Ludicolo
  272: ["Kitakami"],
  // #273 Seedot
  273: ["Kitakami"],
  // #274 Nuzleaf
  274: ["Kitakami"],
  // #275 Shiftry
  275: ["Kitakami"],
  // #278 Wingull
  278: ["South Province (Area One)", "West Paldean Sea", "North Province (Area Three)"],
  // #279 Pelipper
  279: ["West Paldean Sea", "North Paldean Sea"],
  // #280 Ralts
  280: ["South Province (Area One)", "South Province (Area Two)"],
  // #281 Kirlia
  281: ["South Province (Area Four)", "East Province (Area Two)", "Dalizapa Passage"],
  // #282 Gardevoir
  282: ["Glaseado Mountain", "North Province (Area One)"],
  // #283 Surskit
  283: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Five)"],
  // #284 Masquerain
  284: ["South Province (Area One)", "South Province (Area Five)", "Area Zero"],
  // #285 Shroomish
  285: ["South Province (Area Three)", "South Province (Area Five)", "West Province (Area Three)"],
  // #286 Breloom
  286: ["West Province (Area Three)", "Artazon"],
  // #287 Slakoth
  287: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)"],
  // #288 Vigoroth
  288: ["South Province (Area Three)", "South Province (Area Five)", "Dalizapa Passage"],
  // #289 Slaking
  289: ["North Province (Area Two)", "Socarrat Trail"],
  // #296 Makuhita
  296: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "Asado Desert"],
  // #297 Hariyama
  297: ["South Province (Area Five)", "East Province (Area Three)", "Alfornada Cavern", "Dalizapa Passage", "Area Zero"],
  // #298 Azurill
  298: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Five)", "East Province (Area One)"],
  // #299 Nosepass
  299: ["Kitakami"],
  // #302 Sableye
  302: ["East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "Dalizapa Passage", "Alfornada Cavern", "Area Zero"],
  // #307 Meditite
  307: ["South Province (Area Four)", "West Province (Area One)", "Area Zero"],
  // #308 Medicham
  308: ["South Province (Area Six)", "Dalizapa Passage", "Alfornada Cavern", "Area Zero"],
  // #311 Plusle
  311: ["Blueberry Academy (Terarium)"],
  // #312 Minun
  312: ["Blueberry Academy (Terarium)"],
  // #313 Volbeat
  313: ["Kitakami"],
  // #314 Illumise
  314: ["Kitakami"],
  // #316 Gulpin
  316: ["South Province (Area Three)", "East Province (Area One)"],
  // #317 Swalot
  317: ["Casseroya Lake"],
  // #322 Numel
  322: ["West Province (Area One)", "Area Zero"],
  // #323 Camerupt
  323: ["Area Zero"],
  // #324 Torkoal
  324: ["East Province (Area Three)", "Dalizapa Passage"],
  // #325 Spoink
  325: ["South Province (Area Three)", "South Province (Area Four)", "Dalizapa Passage"],
  // #326 Grumpig
  326: ["South Province (Area Four)", "North Province (Area One)", "North Province (Area Two)", "Dalizapa Passage"],
  // #328 Trapinch
  328: ["Blueberry Academy (Terarium)"],
  // #329 Vibrava
  329: ["Blueberry Academy (Terarium)"],
  // #330 Flygon
  330: ["Blueberry Academy (Terarium)"],
  // #331 Cacnea
  331: ["Asado Desert"],
  // #332 Cacturne
  332: ["Asado Desert"],
  // #333 Swablu
  333: ["South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "West Province (Area One)", "Casseroya Lake", "Area Zero"],
  // #334 Altaria
  334: ["South Province (Area Six)", "North Province (Area One)", "North Province (Area Two)", "Dalizapa Passage", "Alfornada Cavern", "Casseroya Lake", "Area Zero"],
  // #335 Zangoose
  335: ["South Province (Area Three)", "South Province (Area Five)"],
  // #336 Seviper
  336: ["South Province (Area Three)", "South Province (Area Five)"],
  // #339 Barboach
  339: ["South Province (Area Two)", "South Province (Area Four)", "South Province (Area Five)", "West Province (Area Two)", "Tagtree Thicket"],
  // #340 Whiscash
  340: ["South Province (Area Four)", "North Province (Area One)", "West Province (Area Three)", "Tagtree Thicket", "Glaseado Mountain", "Dalizapa Passage"],
  // #341 Corphish
  341: ["Kitakami"],
  // #342 Crawdaunt
  342: ["Kitakami"],
  // #349 Feebas
  349: ["Kitakami"],
  // #350 Milotic
  350: ["Kitakami"],
  // #353 Shuppet
  353: ["East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)"],
  // #354 Banette
  354: ["Dalizapa Passage", "Alfornada Cavern"],
  // #355 Duskull
  355: ["Kitakami"],
  // #356 Dusclops
  356: ["Kitakami"],
  // #357 Tropius
  357: ["West Province (Area Two)", "West Province (Area Three)", "Casseroya Lake"],
  // #358 Chimecho
  358: ["Kitakami"],
  // #361 Snorunt
  361: ["Glaseado Mountain", "Dalizapa Passage"],
  // #362 Glalie
  362: ["Glaseado Mountain"],
  // #370 Luvdisc
  370: ["East Paldean Sea", "West Paldean Sea"],
  // #371 Bagon
  371: ["South Province (Area One)", "South Province (Area Three)", "East Province (Area Three)", "West Province (Area One)", "Alfornada Cavern", "Dalizapa Passage"],
  // #372 Shelgon
  372: ["North Province (Area Two)", "Alfornada Cavern", "Dalizapa Passage"],
  // #373 Salamence
  373: ["Evolve Shelgon (Lv. 50)"],
  // #374 Beldum
  374: ["Blueberry Academy (Terarium)"],
  // #375 Metang
  375: ["Blueberry Academy (Terarium)"],
  // #376 Metagross
  376: ["Blueberry Academy (Terarium)"],
  // #396 Starly
  396: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)"],
  // #397 Staravia
  397: ["South Province (Area Two)", "South Province (Area Four)", "West Province (Area Two)", "West Province (Area Three)"],
  // #398 Staraptor
  398: ["Casseroya Lake", "Area Zero"],
  // #401 Kricketot
  401: ["South Province (Area Two)", "South Province (Area Three)"],
  // #402 Kricketune
  402: ["South Province (Area Three)", "Cortondo"],
  // #403 Shinx
  403: ["South Province (Area Three)", "South Province (Area Five)"],
  // #404 Luxio
  404: ["South Province (Area Three)", "South Province (Area Five)"],
  // #405 Luxray
  405: ["South Province (Area Five)"],
  // #408 Cranidos
  408: ["Blueberry Academy (Terarium)"],
  // #409 Rampardos
  409: ["Blueberry Academy (Terarium)"],
  // #410 Shieldon
  410: ["Blueberry Academy (Terarium)"],
  // #411 Bastiodon
  411: ["Blueberry Academy (Terarium)"],
  // #415 Combee
  415: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Four)", "East Province (Area One)", "East Paldean Sea"],
  // #416 Vespiquen
  416: ["East Paldean Sea", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Casseroya Lake", "Area Zero"],
  // #417 Pachirisu
  417: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Two)", "West Province (Area Three)"],
  // #418 Buizel
  418: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Five)", "East Province (Area Two)", "East Paldean Sea", "West Province (Area One)", "West Province (Area Two)", "Tagtree Thicket", "Glaseado Mountain", "Area Zero"],
  // #419 Floatzel
  419: ["West Province (Area Two)", "West Province (Area Three)", "East Paldean Sea", "West Paldean Sea", "North Paldean Sea", "Casseroya Lake", "Glaseado Mountain", "Area Zero"],
  // #422 Shellos
  422: ["South Province (Area Five)", "West Province (Area Two)"],
  // #423 Gastrodon
  423: ["North Province (Area One)", "North Province (Area Three)", "Casseroya Lake"],
  // #424 Ambipom
  424: ["Kitakami"],
  // #425 Drifloon
  425: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "West Province (Area One)", "West Province (Area Two)", "Glaseado Mountain", "Dalizapa Passage", "Tagtree Thicket"],
  // #426 Drifblim
  426: ["Dalizapa Passage", "Alfornada Cavern", "Casseroya Lake", "Glaseado Mountain"],
  // #429 Mismagius
  429: ["North Province (Area One)", "North Province (Area Two)", "Casseroya Lake", "Glaseado Mountain"],
  // #430 Honchkrow
  430: ["South Province (Area Six)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Dalizapa Passage", "Casseroya Lake", "Socarrat Trail", "Area Zero"],
  // #433 Chingling
  433: ["Kitakami"],
  // #434 Stunky
  434: ["South Province (Area Three)", "South Province (Area Five)"],
  // #435 Skuntank
  435: ["Casseroya Lake"],
  // #436 Bronzor
  436: ["South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Two)", "West Province (Area One)", "West Province (Area Two)"],
  // #437 Bronzong
  437: ["North Province (Area Two)", "Dalizapa Passage", "Casseroya Lake"],
  // #438 Bonsly
  438: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)"],
  // #440 Happiny
  440: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)"],
  // #442 Spiritomb
  442: ["North Province (Area One)", "Glaseado Mountain", "Dalizapa Passage", "Casseroya Lake"],
  // #443 Gible
  443: ["West Province (Area One)", "West Province (Area Two)"],
  // #444 Gabite
  444: ["West Province (Area Two)", "Dalizapa Passage", "Glaseado Mountain", "Alfornada Cavern", "Area Zero"],
  // #445 Garchomp
  445: ["Area Zero"],
  // #446 Munchlax
  446: ["Kitakami"],
  // #447 Riolu
  447: ["South Province (Area Two)", "South Province (Area Four)", "North Province (Area One)"],
  // #448 Lucario
  448: ["North Province (Area One)", "North Province (Area Two)", "Area Zero"],
  // #449 Hippopotas
  449: ["Asado Desert"],
  // #450 Hippowdon
  450: ["Asado Desert"],
  // #453 Croagunk
  453: ["South Province (Area Five)", "West Province (Area Two)"],
  // #454 Toxicroak
  454: ["Casseroya Lake", "Area Zero"],
  // #456 Finneon
  456: ["West Paldean Sea"],
  // #457 Lumineon
  457: ["West Paldean Sea", "North Paldean Sea"],
  // #459 Snover
  459: ["Glaseado Mountain"],
  // #460 Abomasnow
  460: ["Glaseado Mountain"],
  // #461 Weavile
  461: ["Glaseado Mountain", "Dalizapa Passage", "Area Zero"],
  // #462 Magnezone
  462: ["Evolve Magneton (Thunder Stone)"],
  // #464 Rhyperior
  464: ["Blueberry Academy (Terarium)"],
  // #466 Electivire
  466: ["Blueberry Academy (Terarium)"],
  // #467 Magmortar
  467: ["Blueberry Academy (Terarium)"],
  // #469 Yanmega
  469: ["Kitakami"],
  // #470 Leafeon
  470: ["West Province (Area Three)", "Socarrat Trail"],
  // #471 Glaceon
  471: ["Glaseado Mountain"],
  // #472 Gliscor
  472: ["Kitakami"],
  // #473 Mamoswine
  473: ["Kitakami"],
  // #474 Porygon-Z
  474: ["Blueberry Academy (Terarium)"],
  // #475 Gallade
  475: ["North Province (Area One)", "Dalizapa Passage", "Alfornada Cavern", "Area Zero"],
  // #476 Probopass
  476: ["Kitakami"],
  // #477 Dusknoir
  477: ["Kitakami"],
  // #478 Froslass
  478: ["Glaseado Mountain", "Dalizapa Passage"],
  // #479 Rotom
  479: ["West Province (Area Two)", "East Province (Area Two)"],
  // #495 Snivy
  495: ["Blueberry Academy (Terarium)"],
  // #522 Blitzle
  522: ["Blueberry Academy (Terarium)"],
  // #523 Zebstrika
  523: ["Blueberry Academy (Terarium)"],
  // #529 Drilbur
  529: ["Blueberry Academy (Terarium)"],
  // #530 Excadrill
  530: ["Blueberry Academy (Terarium)"],
  // #532 Timburr
  532: ["Kitakami"],
  // #533 Gurdurr
  533: ["Kitakami"],
  // #534 Conkeldurr
  534: ["Kitakami"],
  // #540 Sewaddle
  540: ["Kitakami"],
  // #541 Swadloon
  541: ["Kitakami"],
  // #542 Leavanny
  542: ["Kitakami"],
  // #546 Cottonee
  546: ["Blueberry Academy (Terarium)"],
  // #547 Whimsicott
  547: ["Blueberry Academy (Terarium)"],
  // #548 Petilil
  548: ["South Province (Area Four)", "West Province (Area One)"],
  // #549 Lilligant
  549: ["South Province (Area Four)", "South Province (Area Six)", "North Province (Area Three)", "West Province (Area One)", "Area Zero"],
  // #550 Basculin
  550: ["South Province (Area One)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Two)", "West Province (Area Two)", "West Province (Area Three)", "Glaseado Mountain", "Tagtree Thicket", "Area Zero"],
  // #551 Sandile
  551: ["Asado Desert"],
  // #552 Krokorok
  552: ["Asado Desert"],
  // #553 Krookodile
  553: ["Asado Desert"],
  // #559 Scraggy
  559: ["Blueberry Academy (Terarium)"],
  // #560 Scrafty
  560: ["Blueberry Academy (Terarium)"],
  // #570 Zorua
  570: ["West Province (Area Three)", "Tagtree Thicket"],
  // #571 Zoroark
  571: ["Socarrat Trail"],
  // #572 Minccino
  572: ["Blueberry Academy (Terarium)"],
  // #573 Cinccino
  573: ["Blueberry Academy (Terarium)"],
  // #574 Gothita
  574: ["East Province (Area Three)", "West Province (Area One)"],
  // #575 Gothorita
  575: ["South Province (Area Six)"],
  // #576 Gothitelle
  576: ["South Province (Area Six)"],
  // #577 Solosis
  577: ["Blueberry Academy (Terarium)"],
  // #578 Duosion
  578: ["Blueberry Academy (Terarium)"],
  // #579 Reuniclus
  579: ["Blueberry Academy (Terarium)"],
  // #580 Ducklett
  580: ["Kitakami"],
  // #581 Swanna
  581: ["Kitakami"],
  // #585 Deerling
  585: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area Two)", "Dalizapa Passage", "Glaseado Mountain"],
  // #586 Sawsbuck
  586: ["South Province (Area Four)", "West Province (Area Three)", "Dalizapa Passage", "North Province (Area One)"],
  // #590 Foongus
  590: ["West Province (Area Three)", "Tagtree Thicket", "North Province (Area Two)"],
  // #591 Amoonguss
  591: ["North Province (Area Two)", "Socarrat Trail"],
  // #594 Alomomola
  594: ["North Paldean Sea"],
  // #595 Joltik
  595: ["Blueberry Academy (Terarium)"],
  // #596 Galvantula
  596: ["Blueberry Academy (Terarium)"],
  // #602 Tynamo
  602: ["West Paldean Sea", "North Paldean Sea"],
  // #603 Eelektrik
  603: ["West Paldean Sea", "North Paldean Sea"],
  // #604 Eelektross
  604: ["Evolve Eelektrik (Thunder Stone)"],
  // #607 Litwick
  607: ["Kitakami"],
  // #608 Lampent
  608: ["Kitakami"],
  // #609 Chandelure
  609: ["Kitakami"],
  // #610 Axew
  610: ["South Province (Area Four)", "South Province (Area Five)", "Dalizapa Passage", "North Province (Area One)"],
  // #611 Fraxure
  611: ["North Province (Area One)", "Dalizapa Passage"],
  // #612 Haxorus
  612: ["Evolve Fraxure (Lv. 48)"],
  // #613 Cubchoo
  613: ["Glaseado Mountain", "Dalizapa Passage"],
  // #614 Beartic
  614: ["Glaseado Mountain", "Dalizapa Passage"],
  // #615 Cryogonal
  615: ["Glaseado Mountain"],
  // #619 Mienfoo
  619: ["Kitakami"],
  // #620 Mienshao
  620: ["Kitakami"],
  // #622 Golett
  622: ["Blueberry Academy (Terarium)"],
  // #623 Golurk
  623: ["Blueberry Academy (Terarium)"],
  // #624 Pawniard
  624: ["South Province (Area Five)", "East Province (Area Three)", "Inlet Grotto", "Area Zero"],
  // #625 Bisharp
  625: ["North Province (Area Two)", "Area Zero"],
  // #627 Rufflet
  627: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Three)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Asado Desert"],
  // #628 Braviary
  628: ["South Province (Area Three)", "North Province (Area One)", "Asado Desert"],
  // #629 Vullaby
  629: ["Kitakami"],
  // #630 Mandibuzz
  630: ["Kitakami"],
  // #633 Deino
  633: ["Glaseado Mountain", "North Province (Area Two)", "Dalizapa Passage"],
  // #634 Zweilous
  634: ["North Province (Area Two)", "Area Zero"],
  // #635 Hydreigon
  635: ["Evolve Zweilous (Lv. 64)"],
  // #636 Larvesta
  636: ["Asado Desert"],
  // #637 Volcarona
  637: ["Area Zero"],
  // #650 Chespin
  650: ["Blueberry Academy (Terarium)"],
  // #656 Froakie
  656: ["Blueberry Academy (Terarium)"],
  // #661 Fletchling
  661: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Five)"],
  // #662 Fletchinder
  662: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "West Province (Area Two)", "West Province (Area Three)"],
  // #663 Talonflame
  663: ["South Province (Area Five)", "Area Zero"],
  // #664 Scatterbug
  664: ["South Province (Area One)", "South Province (Area Five)"],
  // #665 Spewpa
  665: ["South Province (Area One)", "South Province (Area Four)"],
  // #666 Vivillon
  666: ["North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)"],
  // #667 Litleo
  667: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area One)"],
  // #668 Pyroar
  668: ["North Province (Area One)", "Dalizapa Passage"],
  // #669 Flabebe
  669: ["South Province (Area One)", "South Province (Area Four)", "East Paldean Sea"],
  // #670 Floette
  670: ["South Province (Area One)", "South Province (Area Four)", "West Province (Area One)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "East Paldean Sea"],
  // #671 Florges
  671: ["North Province (Area Three)"],
  // #672 Skiddo
  672: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "Asado Desert"],
  // #673 Gogoat
  673: ["South Province (Area Six)", "West Province (Area Three)", "North Province (Area One)", "North Province (Area Three)", "Casseroya Lake", "Dalizapa Passage", "Area Zero"],
  // #677 Espurr
  677: ["Blueberry Academy (Terarium)"],
  // #678 Meowstic
  678: ["Blueberry Academy (Terarium)"],
  // #686 Inkay
  686: ["Blueberry Academy (Terarium)"],
  // #687 Malamar
  687: ["Blueberry Academy (Terarium)"],
  // #690 Skrelp
  690: ["East Paldean Sea", "West Paldean Sea", "North Paldean Sea"],
  // #691 Dragalge
  691: ["North Paldean Sea"],
  // #692 Clauncher
  692: ["East Paldean Sea", "West Paldean Sea", "North Paldean Sea"],
  // #693 Clawitzer
  693: ["North Paldean Sea"],
  // #700 Sylveon
  700: ["South Province (Area Six)", "West Province (Area Three)"],
  // #701 Hawlucha
  701: ["South Province (Area Four)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Casseroya Lake", "Dalizapa Passage", "Area Zero"],
  // #702 Dedenne
  702: ["West Province (Area Three)", "North Province (Area Three)"],
  // #703 Carbink
  703: ["Kitakami"],
  // #704 Goomy
  704: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Three)", "West Province (Area Three)"],
  // #705 Sliggoo
  705: ["West Province (Area Three)", "Casseroya Lake"],
  // #706 Goodra
  706: ["Evolve Sliggoo (Lv. 50, in rain)"],
  // #707 Klefki
  707: ["South Province (Area Six)", "North Province (Area One)"],
  // #708 Phantump
  708: ["Kitakami"],
  // #709 Trevenant
  709: ["Kitakami"],
  // #712 Bergmite
  712: ["Glaseado Mountain", "North Paldean Sea"],
  // #713 Avalugg
  713: ["Glaseado Mountain", "North Paldean Sea"],
  // #714 Noibat
  714: ["North Province (Area One)", "North Province (Area Two)", "West Province (Area Two)", "Glaseado Mountain"],
  // #715 Noivern
  715: ["North Province (Area One)", "North Province (Area Two)"],
  // #731 Pikipek
  731: ["Blueberry Academy (Terarium)"],
  // #732 Trumbeak
  732: ["Blueberry Academy (Terarium)"],
  // #733 Toucannon
  733: ["Blueberry Academy (Terarium)"],
  // #734 Yungoos
  734: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area One)", "Inlet Grotto"],
  // #735 Gumshoos
  735: ["South Province (Area Three)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "West Province (Area Three)", "North Province (Area One)", "Tagtree Thicket", "Dalizapa Passage", "Alfornada Cavern", "Inlet Grotto", "Area Zero"],
  // #736 Grubbin
  736: ["Kitakami"],
  // #737 Charjabug
  737: ["Kitakami"],
  // #738 Vikavolt
  738: ["Kitakami"],
  // #739 Crabrawler
  739: ["South Province (Area Five)", "East Province (Area Two)", "West Province (Area One)", "West Province (Area Two)", "Glaseado Mountain"],
  // #740 Crabominable
  740: ["East Province (Area Two)", "Glaseado Mountain"],
  // #741 Oricorio
  741: ["South Province (Area One)", "East Province (Area One)"],
  // #742 Cutiefly
  742: ["Kitakami"],
  // #743 Ribombee
  743: ["Kitakami"],
  // #744 Rockruff
  744: ["South Province (Area One)", "South Province (Area Four)", "West Province (Area One)"],
  // #745 Lycanroc
  745: ["North Province (Area One)", "Dalizapa Passage", "Alfornada Cavern", "Glaseado Mountain", "Area Zero"],
  // #747 Mareanie
  747: ["East Paldean Sea"],
  // #748 Toxapex
  748: ["East Paldean Sea"],
  // #749 Mudbray
  749: ["South Province (Area One)", "South Province (Area Five)", "East Province (Area One)", "West Province (Area One)", "Asado Desert", "Dalizapa Passage"],
  // #750 Mudsdale
  750: ["North Province (Area One)", "North Province (Area Two)", "Dalizapa Passage", "Glaseado Mountain", "Asado Desert", "Area Zero"],
  // #751 Dewpider
  751: ["Blueberry Academy (Terarium)"],
  // #752 Araquanid
  752: ["Blueberry Academy (Terarium)"],
  // #753 Fomantis
  753: ["South Province (Area One)", "Tagtree Thicket", "Socarrat Trail"],
  // #754 Lurantis
  754: ["North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Socarrat Trail"],
  // #757 Salandit
  757: ["East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "Alfornada Cavern", "Dalizapa Passage", "Glaseado Mountain", "Area Zero"],
  // #758 Salazzle
  758: ["North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Dalizapa Passage", "Area Zero"],
  // #761 Bounsweet
  761: ["South Province (Area One)", "South Province (Area Two)", "East Province (Area One)", "East Province (Area Two)"],
  // #762 Steenee
  762: ["East Province (Area One)", "East Province (Area Two)", "West Province (Area Three)"],
  // #763 Tsareena
  763: ["Casseroya Lake", "Artazon"],
  // #764 Comfey
  764: ["Blueberry Academy (Terarium)"],
  // #765 Oranguru
  765: ["Tagtree Thicket", "North Province (Area Two)"],
  // #766 Passimian
  766: ["Tagtree Thicket", "North Province (Area Two)"],
  // #769 Sandygast
  769: ["South Province (Area Five)", "East Province (Area Two)", "West Province (Area Two)"],
  // #770 Palossand
  770: ["West Province (Area Two)"],
  // #774 Minior
  774: ["Blueberry Academy (Terarium)"],
  // #775 Komala
  775: ["South Province (Area One)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area Three)", "Tagtree Thicket"],
  // #778 Mimikyu
  778: ["East Province (Area Two)", "West Province (Area Three)", "Tagtree Thicket"],
  // #779 Bruxish
  779: ["East Paldean Sea"],
  // #782 Jangmo-o
  782: ["Kitakami"],
  // #783 Hakamo-o
  783: ["Kitakami"],
  // #784 Kommo-o
  784: ["Kitakami"],
  // #810 Grookey
  810: ["Blueberry Academy (Terarium)"],
  // #819 Skwovet
  819: ["South Province (Area One)", "South Province (Area Two)"],
  // #820 Greedent
  820: ["South Province (Area Six)", "West Province (Area Three)", "Dalizapa Passage", "Tagtree Thicket"],
  // #821 Rookidee
  821: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Five)", "East Province (Area Two)"],
  // #822 Corvisquire
  822: ["South Province (Area One)", "South Province (Area Three)", "South Province (Area Five)", "East Province (Area Two)", "East Province (Area Three)"],
  // #823 Corviknight
  823: ["Area Zero"],
  // #833 Chewtle
  833: ["South Province (Area One)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "Glaseado Mountain"],
  // #834 Drednaw
  834: ["South Province (Area Five)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area Two)", "Casseroya Lake", "Glaseado Mountain"],
  // #837 Rolycoly
  837: ["East Province (Area Three)"],
  // #838 Carkol
  838: ["East Province (Area Three)"],
  // #839 Coalossal
  839: ["Evolve Carkol (Lv. 34)"],
  // #840 Applin
  840: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area Three)", "Tagtree Thicket"],
  // #841 Flapple
  841: ["Evolve Applin (Tart Apple)"],
  // #842 Appletun
  842: ["Evolve Applin (Sweet Apple)"],
  // #843 Silicobra
  843: ["East Province (Area Three)", "Asado Desert"],
  // #844 Sandaconda
  844: ["Asado Desert"],
  // #845 Cramorant
  845: ["Kitakami"],
  // #846 Arrokuda
  846: ["South Province (Area One)", "South Province (Area Five)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "East Paldean Sea"],
  // #847 Barraskewda
  847: ["East Province (Area Two)", "East Province (Area Three)", "West Province (Area Two)", "North Province (Area One)", "North Province (Area Three)", "North Paldean Sea", "Casseroya Lake", "Glaseado Mountain"],
  // #848 Toxel
  848: ["South Province (Area Four)"],
  // #849 Toxtricity
  849: ["Alfornada Cavern"],
  // #854 Sinistea
  854: ["East Province (Area Three)", "South Province (Area Six)", "West Province (Area Three)"],
  // #855 Polteageist
  855: ["Evolve Sinistea (Cracked/Chipped Pot)"],
  // #856 Hatenna
  856: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Four)"],
  // #857 Hattrem
  857: ["South Province (Area Six)", "Tagtree Thicket", "Glaseado Mountain"],
  // #858 Hatterene
  858: ["Evolve Hattrem (Lv. 42)"],
  // #859 Impidimp
  859: ["Tagtree Thicket"],
  // #860 Morgrem
  860: ["Tagtree Thicket"],
  // #861 Grimmsnarl
  861: ["Evolve Morgrem (Lv. 42)"],
  // #868 Milcery
  868: ["Blueberry Academy (Terarium)"],
  // #869 Alcremie
  869: ["Blueberry Academy (Terarium)"],
  // #870 Falinks
  870: ["East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "North Province (Area Two)"],
  // #871 Pincurchin
  871: ["East Province (Area Two)", "West Province (Area Two)", "North Province (Area One)", "North Province (Area Three)", "Glaseado Mountain"],
  // #872 Snom
  872: ["Glaseado Mountain", "Dalizapa Passage"],
  // #873 Frosmoth
  873: ["North Province (Area One)", "Casseroya Lake", "Glaseado Mountain", "Area Zero"],
  // #874 Stonjourner
  874: ["Asado Desert"],
  // #875 Eiscue
  875: ["North Province (Area Three)", "North Paldean Sea"],
  // #876 Indeedee
  876: ["South Province (Area Six)", "North Province (Area One)"],
  // #877 Morpeko
  877: ["Kitakami"],
  // #878 Cufant
  878: ["East Province (Area Three)", "Area Zero"],
  // #879 Copperajah
  879: ["North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Casseroya Lake", "Dalizapa Passage", "Glaseado Mountain", "Area Zero"],
  // #884 Duraludon
  884: ["Blueberry Academy (Terarium)"],
  // #885 Dreepy
  885: ["South Province (Area One)", "South Province (Area Four)", "South Province (Area Five)", "South Province (Area Six)", "West Province (Area Two)", "West Province (Area Three)", "Glaseado Mountain"],
  // #886 Drakloak
  886: ["North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Casseroya Lake", "Glaseado Mountain", "Area Zero"],
  // #887 Dragapult
  887: ["Evolve Drakloak (Lv. 60)"],
  // #900 Kleavor
  900: ["Blueberry Academy (Terarium)"],
  // #901 Ursaluna
  901: ["Kitakami"],
  // #902 Basculegion
  902: ["Kitakami"],
  // #904 Overqwil
  904: ["Blueberry Academy (Terarium)"],

  // === Gen 9 Starters ===
  // #906 Sprigatito
  906: ["Starter Pokemon (Cabo Poco)"],
  // #907 Floragato
  907: ["Evolve Sprigatito (Lv. 16)"],
  // #908 Meowscarada
  908: ["Evolve Floragato (Lv. 36)"],
  // #909 Fuecoco
  909: ["Starter Pokemon (Cabo Poco)"],
  // #910 Crocalor
  910: ["Evolve Fuecoco (Lv. 16)"],
  // #911 Skeledirge
  911: ["Evolve Crocalor (Lv. 36)"],
  // #912 Quaxly
  912: ["Starter Pokemon (Cabo Poco)"],
  // #913 Quaxwell
  913: ["Evolve Quaxly (Lv. 16)"],
  // #914 Quaquaval
  914: ["Evolve Quaxwell (Lv. 36)"],

  // === Gen 9 Pokemon ===
  // #915 Lechonk
  915: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)"],
  // #916 Oinkologne
  916: ["South Province (Area Three)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area Two)", "West Province (Area Three)", "Tagtree Thicket"],
  // #917 Tarountula
  917: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "Asado Desert"],
  // #918 Spidops
  918: ["East Province (Area One)", "East Province (Area Two)", "West Province (Area Three)", "North Province (Area Two)", "Socarrat Trail", "Tagtree Thicket", "Cortondo"],
  // #919 Nymble
  919: ["South Province (Area Two)", "South Province (Area Three)", "South Province (Area Six)", "West Province (Area One)"],
  // #920 Lokix
  920: ["South Province (Area Six)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area Two)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "Dalizapa Passage", "Alfornada Cavern", "Casseroya Lake", "Area Zero"],
  // #921 Pawmi
  921: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "West Province (Area One)", "Area Zero"],
  // #922 Pawmo
  922: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area One)", "West Province (Area Two)", "West Province (Area Three)", "North Province (Area One)", "Dalizapa Passage", "Area Zero"],
  // #923 Pawmot
  923: ["Evolve Pawmo (Walk 1000 steps, then level up)"],
  // #924 Tandemaus
  924: ["East Province (Area One)", "East Province (Area Two)", "West Province (Area Two)", "West Province (Area Three)"],
  // #925 Maushold
  925: ["Evolve Tandemaus (Lv. 25)"],
  // #926 Fidough
  926: ["South Province (Area One)", "South Province (Area Two)"],
  // #927 Dachsbun
  927: ["Area Zero"],
  // #928 Smoliv
  928: ["South Province (Area Two)", "East Province (Area One)"],
  // #929 Dolliv
  929: ["East Paldean Sea", "Tagtree Thicket", "North Province (Area Three)"],
  // #930 Arboliva
  930: ["Artazon"],
  // #931 Squawkabilly
  931: ["South Province (Area One)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)"],
  // #932 Nacli
  932: ["South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "Asado Desert", "Area Zero"],
  // #933 Naclstack
  933: ["South Province (Area Five)", "North Province (Area One)", "North Province (Area Two)", "North Province (Area Three)", "West Province (Area Two)", "Dalizapa Passage", "Glaseado Mountain", "Alfornada Cavern", "Area Zero"],
  // #934 Garganacl
  934: ["Area Zero"],
  // #935 Charcadet
  935: ["South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "West Province (Area Three)", "Asado Desert", "Tagtree Thicket"],
  // #936 Armarouge
  936: ["Evolve Charcadet (Auspicious Armor - Scarlet)"],
  // #937 Ceruledge
  937: ["Evolve Charcadet (Malicious Armor - Violet)"],
  // #938 Tadbulb
  938: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Three)", "South Province (Area Four)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area Two)", "Glaseado Mountain", "Area Zero"],
  // #939 Bellibolt
  939: ["South Province (Area Four)", "South Province (Area Six)", "East Province (Area Three)", "West Province (Area Two)", "West Province (Area Three)", "North Province (Area Three)", "Glaseado Mountain", "Area Zero"],
  // #940 Wattrel
  940: ["East Province (Area One)", "East Province (Area Two)", "West Province (Area One)", "West Province (Area Two)", "East Paldean Sea"],
  // #941 Kilowattrel
  941: ["East Paldean Sea", "North Province (Area One)", "North Province (Area Three)"],
  // #942 Maschiff
  942: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Four)", "West Province (Area Two)", "West Province (Area Three)"],
  // #943 Mabosstiff
  943: ["West Province (Area Three)", "North Province (Area Two)"],
  // #944 Shroodle
  944: ["South Province (Area One)", "South Province (Area Two)", "East Province (Area One)", "East Province (Area Two)", "Tagtree Thicket"],
  // #945 Grafaiai
  945: ["North Province (Area Two)", "Tagtree Thicket", "Socarrat Trail"],
  // #946 Bramblin
  946: ["East Province (Area Three)", "Asado Desert", "Area Zero"],
  // #947 Brambleghast
  947: ["North Province (Area One)", "Socarrat Trail", "Area Zero"],
  // #948 Toedscool
  948: ["South Province (Area One)", "South Province (Area Two)", "South Province (Area Five)", "East Province (Area One)", "East Province (Area Two)", "West Province (Area Three)", "Tagtree Thicket"],
  // #949 Toedscruel
  949: ["Socarrat Trail"],
  // #950 Klawf
  950: ["South Province (Area Five)", "East Province (Area One)"],
  // #951 Capsakid
  951: ["West Province (Area One)", "Asado Desert"],
  // #952 Scovillain
  952: ["North Province (Area One)", "North Province (Area Three)", "Dalizapa Passage"],
  // #953 Rellor
  953: ["Asado Desert"],
  // #954 Rabsca
  954: ["Evolve Rellor (Walk 1000 steps, then level up)"],
  // #955 Flittle
  955: ["South Province (Area One)", "South Province (Area Four)", "South Province (Area Five)", "South Province (Area Six)", "West Province (Area One)", "Asado Desert", "Dalizapa Passage"],
  // #956 Espathra
  956: ["South Province (Area Six)", "North Province (Area One)", "Asado Desert", "Dalizapa Passage", "Area Zero"],
  // #957 Tinkatink
  957: ["South Province (Area Two)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "Asado Desert"],
  // #958 Tinkatuff
  958: ["South Province (Area Six)", "West Province (Area Two)", "West Province (Area Three)", "North Province (Area One)", "North Province (Area Three)", "Dalizapa Passage", "Socarrat Trail", "Glaseado Mountain"],
  // #959 Tinkaton
  959: ["Evolve Tinkatuff (Lv. 38)"],
  // #960 Wiglett
  960: ["South Province (Area One)", "South Province (Area Five)", "East Province (Area Two)", "West Province (Area One)", "West Province (Area Two)", "North Province (Area One)"],
  // #961 Wugtrio
  961: ["West Province (Area Two)", "North Province (Area One)", "North Province (Area Three)"],
  // #962 Bombirdier
  962: ["West Province (Area One)", "West Province (Area Three)", "South Province (Area Six)"],
  // #963 Finizen
  963: ["West Province (Area Two)", "East Paldean Sea", "West Paldean Sea", "North Paldean Sea"],
  // #964 Palafin
  964: ["Evolve Finizen (Lv. 38 in co-op)"],
  // #965 Varoom
  965: ["East Province (Area Three)"],
  // #966 Revavroom
  966: ["North Province (Area One)", "North Province (Area Two)", "Dalizapa Passage"],
  // #967 Cyclizar
  967: ["East Province (Area One)", "West Province (Area One)", "West Province (Area Two)", "West Province (Area Three)", "Dalizapa Passage"],
  // #968 Orthworm
  968: ["East Province (Area Three)", "Asado Desert"],
  // #969 Glimmet
  969: ["East Province (Area Three)", "West Province (Area Two)", "Alfornada Cavern", "Glaseado Mountain", "Dalizapa Passage", "Area Zero"],
  // #970 Glimmora
  970: ["Area Zero"],
  // #971 Greavard
  971: ["West Province (Area Three)", "Glaseado Mountain", "Dalizapa Passage", "Area Zero"],
  // #972 Houndstone
  972: ["North Province (Area One)", "Glaseado Mountain", "Dalizapa Passage", "Area Zero"],
  // #973 Flamigo
  973: ["South Province (Area Four)", "South Province (Area Five)", "East Province (Area Two)", "East Province (Area Three)", "West Province (Area One)", "West Province (Area Two)", "North Province (Area One)", "North Province (Area Two)", "Casseroya Lake", "Glaseado Mountain", "Dalizapa Passage", "Area Zero"],
  // #974 Cetoddle
  974: ["West Province (Area Three)", "Glaseado Mountain", "Dalizapa Passage"],
  // #975 Cetitan
  975: ["Glaseado Mountain"],
  // #976 Veluza
  976: ["Casseroya Lake", "West Paldean Sea", "North Paldean Sea", "East Province (Area One)"],
  // #977 Dondozo
  977: ["Casseroya Lake"],
  // #978 Tatsugiri
  978: ["Casseroya Lake"],
  // #979 Annihilape
  979: ["Evolve Primeape (Use Rage Fist 20 times, then level up)"],
  // #980 Clodsire
  980: ["South Province (Area Five)", "South Province (Area Six)", "West Province (Area Three)", "North Province (Area One)", "East Province (Area Three)", "Tagtree Thicket", "Glaseado Mountain"],
  // #981 Farigiraf
  981: ["Area Zero"],
  // #982 Dudunsparce
  982: ["Area Zero"],
  // #983 Kingambit
  983: ["Evolve Bisharp (Defeat 3 Bisharp leading Pawniard, then level up)"],

  // === Paradox Pokemon (Scarlet Exclusive) ===
  // #984 Great Tusk
  984: ["Area Zero (Scarlet only)"],
  // #985 Scream Tail
  985: ["Area Zero (Scarlet only)"],
  // #986 Brute Bonnet
  986: ["Area Zero (Scarlet only)"],
  // #987 Flutter Mane
  987: ["Area Zero (Scarlet only)"],
  // #988 Slither Wing
  988: ["Area Zero (Scarlet only)"],
  // #989 Sandy Shocks
  989: ["Area Zero (Scarlet only)"],

  // === Paradox Pokemon (Violet Exclusive) ===
  // #990 Iron Treads
  990: ["Area Zero (Violet only)"],
  // #991 Iron Bundle
  991: ["Area Zero (Violet only)"],
  // #992 Iron Hands
  992: ["Area Zero (Violet only)"],
  // #993 Iron Jugulis
  993: ["Area Zero (Violet only)"],
  // #994 Iron Moth
  994: ["Area Zero (Violet only)"],
  // #995 Iron Thorns
  995: ["Area Zero (Violet only)"],

  // === Box Legendaries ===
  // #996 Frigibax
  996: ["Glaseado Mountain", "Dalizapa Passage"],
  // #997 Arctibax
  997: ["Glaseado Mountain"],
  // #998 Baxcalibur
  998: ["Evolve Arctibax (Lv. 54)"],
  // #999 Gimmighoul
  999: ["Roaming (on top of watchtowers/signposts)"],
  // #1000 Gholdengo
  1000: ["Evolve Gimmighoul (collect 999 Gimmighoul Coins)"],
  // #1001 Wo-Chien
  1001: ["Grasswither Shrine (post-game)"],
  // #1002 Chien-Pao
  1002: ["Icerend Shrine (post-game)"],
  // #1003 Ting-Lu
  1003: ["Groundblight Shrine (post-game)"],
  // #1004 Chi-Yu
  1004: ["Firescourge Shrine (post-game)"],
  // #1005 Roaring Moon
  1005: ["Area Zero (Scarlet only)"],
  // #1006 Iron Valiant
  1006: ["Area Zero (Violet only)"],
  // #1007 Koraidon
  1007: ["Story encounter (Scarlet) / Area Zero (post-game, Scarlet)"],
  // #1008 Miraidon
  1008: ["Story encounter (Violet) / Area Zero (post-game, Violet)"],

  // === DLC: The Teal Mask ===
  // #1009 Walking Wake
  1009: ["Tera Raid Event (Scarlet)"],
  // #1010 Iron Leaves
  1010: ["Tera Raid Event (Violet)"],
  // #1011 Dipplin
  1011: ["Kitakami (Evolve Applin with Syrupy Apple)"],
  // #1012 Poltchageist
  1012: ["Kitakami"],
  // #1013 Sinistcha
  1013: ["Kitakami (Evolve Poltchageist)"],
  // #1014 Okidogi
  1014: ["Kitakami (post-story)"],
  // #1015 Munkidori
  1015: ["Kitakami (post-story)"],
  // #1016 Fezandipiti
  1016: ["Kitakami (post-story)"],
  // #1017 Ogerpon
  1017: ["Kitakami (story encounter)"],

  // === DLC: The Indigo Disk ===
  // #1018 Archaludon
  1018: ["Blueberry Academy (Terarium) - Evolve Duraludon (Metal Alloy)"],
  // #1019 Hydrapple
  1019: ["Blueberry Academy (Terarium) - Evolve Dipplin (Dragon Cheer in party, level up)"],
  // #1020 Gouging Fire
  1020: ["Blueberry Academy (Terarium) - Area Zero Underdepths (Scarlet)"],
  // #1021 Raging Bolt
  1021: ["Blueberry Academy (Terarium) - Area Zero Underdepths (Scarlet)"],
  // #1022 Iron Boulder
  1022: ["Blueberry Academy (Terarium) - Area Zero Underdepths (Violet)"],
  // #1023 Iron Crown
  1023: ["Blueberry Academy (Terarium) - Area Zero Underdepths (Violet)"],
  // #1024 Terapagos
  1024: ["Blueberry Academy (Terarium) - Area Zero Underdepths (story)"],
  // #1025 Pecharunt
  1025: ["Epilogue: Mochi Mayhem (post-DLC story)"],
};
