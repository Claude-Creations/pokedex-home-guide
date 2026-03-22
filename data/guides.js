// ===== Game Guides — Optimal strategies for completing each game's dex =====
const GUIDES = {
  sv: {
    title: { en: 'Scarlet / Violet', de: 'Karmesin / Purpur' },
    icon: '🟣',
    sections: [
      {
        title: { en: 'General Tips', de: 'Allgemeine Tipps' },
        items: [
          { en: 'Complete the main story first to unlock all areas and features like 5-star Tera Raids.', de: 'Schließe zuerst die Hauptstory ab, um alle Gebiete und Features wie 5-Sterne-Tera-Raids freizuschalten.' },
          { en: 'Use Mass Outbreaks to find rare Pokémon — check the map for outbreak markers.', de: 'Nutze Massenaufläufe, um seltene Pokémon zu finden — prüfe die Karte auf Ausbruch-Markierungen.' },
          { en: 'Tera Raids (especially 5★ and 6★) are a great source for Pokémon with rare abilities.', de: 'Tera-Raids (besonders 5★ und 6★) sind eine tolle Quelle für Pokémon mit seltenen Fähigkeiten.' },
          { en: 'Some Pokémon are version-exclusive: trade with the other version or use online trades.', de: 'Manche Pokémon sind versionsexklusiv: Tausche mit der anderen Version oder nutze Online-Tausch.' },
        ]
      },
      {
        title: { en: 'Optimal Route (Paldea)', de: 'Optimale Route (Paldea)' },
        items: [
          { en: 'Start in Cabo Poco — catch early-route Pokémon (Lechonk, Tarountula, Fletchling).', de: 'Starte in Cabo Poco — fange Early-Route-Pokémon (Ferkel, Tarundel, Dartiri).' },
          { en: 'South Province Areas 1-5 cover a huge portion of the Paldea dex (100+ species).', de: 'Südliche Zone Gebiete 1-5 decken einen großen Teil des Paldea-Dex ab (100+ Arten).' },
          { en: 'West Province Area 2 and 3 have unique spawns (Murkrow, Sneasel, etc.).', de: 'Westliche Zone Gebiete 2 und 3 haben einzigartige Spawns (Kramurx, Sniebel, etc.).' },
          { en: 'Casseroya Lake area is rich in Water-types and has Dratini/Dragonair.', de: 'Das Casseroya-See-Gebiet ist reich an Wasser-Pokémon und hat Dratini/Dragonir.' },
          { en: 'Glaseado Mountain for Ice-types: Cetoddle, Frigibax, Snover, and more.', de: 'Montanata für Eis-Pokémon: Fraulo, Frospino, Shnebedeck und mehr.' },
        ]
      },
      {
        title: { en: 'Teal Mask DLC (Kitakami)', de: 'Die Türkisgrüne Maske DLC (Kitakami)' },
        items: [
          { en: 'Kitakami adds 200 Pokémon — many returning fan favorites not in base Paldea.', de: 'Kitakami fügt 200 Pokémon hinzu — viele zurückkehrende Favoriten, die nicht im Basis-Paldea sind.' },
          { en: 'Apple Hills and Kitakami Road have common spawns for early completion.', de: 'Apfelhügel und Kitakami-Straße haben häufige Spawns für frühe Vervollständigung.' },
          { en: 'Legendary: Ogerpon is obtained through the story. 4 different mask forms exist.', de: 'Legendär: Ogerpon wird durch die Story erhalten. 4 verschiedene Maskenformen existieren.' },
        ]
      },
      {
        title: { en: 'Indigo Disk DLC (Blueberry)', de: 'Die Indigoblaue Scheibe DLC (Blaubeer)' },
        items: [
          { en: 'Blueberry Academy Terarium has 4 biomes: Savanna, Coastal, Canyon, Polar.', de: 'Das Blaubeer-Akademie-Terrarium hat 4 Biome: Savanne, Küste, Schlucht, Polar.' },
          { en: 'Use BP from Blueberry Quests (BBQs) to unlock returning starters and legendaries.', de: 'Nutze BP von Blaubeer-Quests (BBQs), um zurückkehrende Starter und Legendäre freizuschalten.' },
          { en: 'All past starters (Gen 1-8) are obtainable through BP shop snacks.', de: 'Alle bisherigen Starter (Gen 1-8) sind über BP-Shop-Snacks erhältlich.' },
        ]
      },
    ]
  },

  swsh: {
    title: { en: 'Sword / Shield', de: 'Schwert / Schild' },
    icon: '⚔️',
    sections: [
      {
        title: { en: 'General Tips', de: 'Allgemeine Tipps' },
        items: [
          { en: 'The Wild Area is the best place for catching — weather changes daily and affects spawns.', de: 'Die Naturzone ist der beste Ort zum Fangen — das Wetter ändert sich täglich und beeinflusst Spawns.' },
          { en: 'Max Raid Battles can yield Pokémon with Hidden Abilities and rare species.', de: 'Dyna-Raids können Pokémon mit versteckten Fähigkeiten und seltene Arten liefern.' },
          { en: 'Surprise Trade (online) can help get version exclusives quickly.', de: 'Überraschungstausch (online) kann helfen, Versionsexklusive schnell zu bekommen.' },
          { en: 'Many Pokémon only appear during specific weather — check the Wild Area weather forecast.', de: 'Viele Pokémon erscheinen nur bei bestimmtem Wetter — prüfe den Naturzonen-Wetterbericht.' },
        ]
      },
      {
        title: { en: 'Version Exclusives', de: 'Versionsexklusive' },
        items: [
          { en: 'Sword exclusives: Sirfetch\'d, Stonjourner, Zacian, Jangmo-o line, and more.', de: 'Schwert-exklusiv: Lauchzelot, Humanolith, Zacian, Miniras-Linie und mehr.' },
          { en: 'Shield exclusives: Galarian Ponyta, Eiscue, Zamazenta, Goomy line, and more.', de: 'Schild-exklusiv: Galar-Ponita, Kubuin, Zamazenta, Viscora-Linie und mehr.' },
          { en: 'Use online trades or a second Switch to get version exclusives.', de: 'Nutze Online-Tausch oder eine zweite Switch für Versionsexklusive.' },
        ]
      },
      {
        title: { en: 'Isle of Armor DLC', de: 'Rüstungsinsel DLC' },
        items: [
          { en: 'Adds 211 Pokémon to catch. Diglett hunt rewards rare Alolan forms.', de: 'Fügt 211 Pokémon zum Fangen hinzu. Digda-Jagd belohnt mit seltenen Alola-Formen.' },
          { en: 'Kubfu evolves into Single Strike or Rapid Strike Urshifu — choose wisely (one per save).', de: 'Dakuma entwickelt sich in Fokus- oder Fließend-Wushu — wähle weise (eines pro Spielstand).' },
          { en: 'Max Soup lets you Gigantamax eligible Pokémon.', de: 'Dyna-Suppe ermöglicht Gigadynamaximierung geeigneter Pokémon.' },
        ]
      },
      {
        title: { en: 'Crown Tundra DLC', de: 'Schneelande der Krone DLC' },
        items: [
          { en: 'Dynamax Adventures let you catch past legendaries — every legendary from Gen 1-7!', de: 'Dyna-Abenteuer lassen dich vergangene Legendäre fangen — jedes Legendäre aus Gen 1-7!' },
          { en: 'Calyrex + Glastrier/Spectrier are story rewards.', de: 'Coronospa + Polaross/Phantoross sind Story-Belohnungen.' },
          { en: 'The Regis (Regieleki/Regidrago) require temple puzzles.', de: 'Die Regis (Regieleki/Regidrago) erfordern Tempel-Rätsel.' },
        ]
      },
    ]
  },

  bdsp: {
    title: { en: 'Brilliant Diamond / Shining Pearl', de: 'Strahlender Diamant / Leuchtende Perle' },
    icon: '💎',
    sections: [
      {
        title: { en: 'General Tips', de: 'Allgemeine Tipps' },
        items: [
          { en: 'The Grand Underground is the best way to catch Pokémon not on regular routes.', de: 'Der Große Untergrund ist der beste Weg, um Pokémon zu fangen, die nicht auf normalen Routen sind.' },
          { en: 'After the National Dex, many Gen 1-4 Pokémon become available in the Underground.', de: 'Nach dem National-Dex werden viele Gen-1-4-Pokémon im Untergrund verfügbar.' },
          { en: 'PokéRadar chaining is the main way to get Pokémon with Hidden Abilities.', de: 'PokéRadar-Ketten sind der Hauptweg, um Pokémon mit versteckten Fähigkeiten zu erhalten.' },
          { en: 'Use Honey Trees for rare spawns (Munchlax, Heracross, etc.).', de: 'Nutze Honigbäume für seltene Spawns (Mampfaxo, Skaraborn, etc.).' },
        ]
      },
      {
        title: { en: 'Optimal Playthrough', de: 'Optimaler Durchlauf' },
        items: [
          { en: 'Catch everything on each route as you progress — it saves backtracking.', de: 'Fange alles auf jeder Route, während du fortschreitest — das spart Rücklaufen.' },
          { en: 'Grand Underground Hideaways change Pokémon based on your statue collection.', de: 'Pokémon-Verstecke im Untergrund ändern Pokémon basierend auf deiner Statuen-Sammlung.' },
          { en: 'Trophy Garden (behind the mansion on Route 212) has daily rotating rare Pokémon.', de: 'Der Trophäengarten (hinter der Villa auf Route 212) hat täglich wechselnde seltene Pokémon.' },
          { en: 'Swarm Pokémon change daily — check with Dawn/Lucas\'s sister in Sandgem Town.', de: 'Schwarm-Pokémon wechseln täglich — frage bei Lucias/Hastes Schwester in Sandgemme nach.' },
        ]
      },
      {
        title: { en: 'Post-Game', de: 'Nach der Story' },
        items: [
          { en: 'Ramanas Park lets you catch legendaries from Gen 1-3 using Slates.', de: 'Der Ramanas-Park lässt dich Legendäre aus Gen 1-3 mit Tafeln fangen.' },
          { en: 'Diamond-exclusive Slates: Johto and Soul Slates. Pearl-exclusive: Kanto and Rainbow.', de: 'Diamant-exklusive Tafeln: Johto und Seelen. Perle-exklusiv: Kanto und Regenbogen.' },
          { en: 'Complete the Sinnoh Dex (see all 150) to unlock the National Dex from Prof. Rowan.', de: 'Vervollständige den Sinnoh-Dex (alle 150 gesehen), um den National-Dex von Prof. Eibe zu erhalten.' },
        ]
      },
    ]
  },

  pla: {
    title: { en: 'Legends: Arceus', de: 'Legenden: Arceus' },
    icon: '⛰️',
    sections: [
      {
        title: { en: 'General Tips', de: 'Allgemeine Tipps' },
        items: [
          { en: 'You can catch Pokémon without battling — sneak and throw Poké Balls directly.', de: 'Du kannst Pokémon ohne Kampf fangen — schleiche und wirf Pokébälle direkt.' },
          { en: 'Back strikes (hitting a Pokémon from behind) greatly increase catch rate.', de: 'Rückentreffer (Pokémon von hinten treffen) erhöhen die Fangrate erheblich.' },
          { en: 'Alpha Pokémon are powerful overworld spawns — worth catching for their high stats.', de: 'Alpha-Pokémon sind mächtige Überwelt-Spawns — lohnt sich wegen ihrer hohen Werte zu fangen.' },
          { en: 'Space-Time Distortions spawn rare and sometimes exclusive Pokémon.', de: 'Raum-Zeit-Verzerrungen spawnen seltene und manchmal exklusive Pokémon.' },
        ]
      },
      {
        title: { en: 'Areas in Order', de: 'Gebiete in Reihenfolge' },
        items: [
          { en: 'Obsidian Fieldlands — Starting area. Starly, Bidoof, Shinx, Ponyta, and more.', de: 'Obsidian-Grasland — Startgebiet. Staralili, Bidiza, Sheinux, Ponita und mehr.' },
          { en: 'Crimson Mirelands — Croagunk, Hippopotas, Tangela. First major optional catches.', de: 'Purpurrotes Sumpfland — Glibunkel, Hippopotas, Tangela. Erste große optionale Fänge.' },
          { en: 'Cobalt Coastlands — Water types galore. Tentacool, Mantyke, Remoraid.', de: 'Kobalt-Küstenland — Wassertypen en masse. Tentacha, Mantirps, Remoraid.' },
          { en: 'Coronet Highlands — Rock/Steel types, Clefairy, Bronzor. Access to many evolutions.', de: 'Kraterberg-Hochland — Gestein/Stahl-Typen, Piepi, Bronzel. Zugang zu vielen Entwicklungen.' },
          { en: 'Alabaster Icelands — Ice types, Sneasel, Snorunt, Bergmite. Final area for many dex entries.', de: 'Alabaster-Eisland — Eis-Typen, Sniebel, Schneppke, Arktip. Letztes Gebiet für viele Dex-Einträge.' },
        ]
      },
      {
        title: { en: 'Unique Mechanics', de: 'Einzigartige Mechaniken' },
        items: [
          { en: 'Some Pokémon evolve differently: Hisuian Growlithe → H-Arcanine (Fire Stone), etc.', de: 'Manche Pokémon entwickeln sich anders: Hisui-Fukano → H-Arkani (Feuerstein), etc.' },
          { en: 'Research Tasks: complete Pokédex entries by catching multiple, seeing moves, etc.', de: 'Forschungsaufträge: Vervollständige Pokédex-Einträge durch mehrfaches Fangen, Attacken sehen, etc.' },
          { en: 'Arceus is obtainable after completing all main missions and catching all 242 Pokémon.', de: 'Arceus ist erhältlich, nachdem alle Hauptmissionen abgeschlossen und alle 242 Pokémon gefangen sind.' },
        ]
      },
    ]
  },

  lgpe: {
    title: { en: 'Let\'s Go Pikachu / Eevee', de: 'Let\'s Go Pikachu / Evoli' },
    icon: '🔴',
    sections: [
      {
        title: { en: 'General Tips', de: 'Allgemeine Tipps' },
        items: [
          { en: 'Catching uses Pokémon GO-style mechanics — no wild battles, just throw Poké Balls.', de: 'Fangen nutzt Pokémon-GO-Mechaniken — keine Wildkämpfe, einfach Pokébälle werfen.' },
          { en: 'Catch combos (catching the same species repeatedly) increase shiny odds and spawn rare Pokémon.', de: 'Fangkombos (gleiche Art wiederholt fangen) erhöhen Shiny-Chancen und spawnen seltene Pokémon.' },
          { en: 'Transfer from Pokémon GO via GO Park to get Alolan forms and Meltan/Melmetal.', de: 'Übertrage von Pokémon GO via GO Park, um Alola-Formen und Meltan/Melmetal zu bekommen.' },
          { en: 'Version exclusives: Pikachu has Oddish, Sandshrew, Growlithe. Eevee has Bellsprout, Vulpix, Meowth.', de: 'Versionsexklusive: Pikachu hat Myrapla, Sandan, Fukano. Evoli hat Knofensa, Vulpix, Mauzi.' },
        ]
      },
      {
        title: { en: 'Optimal Route', de: 'Optimale Route' },
        items: [
          { en: 'Follow the story linearly — the game is route-based like the originals.', de: 'Folge der Story linear — das Spiel ist routenbasiert wie die Originale.' },
          { en: 'Viridian Forest: Bulbasaur (rare spawn), Caterpie/Weedle, Pikachu.', de: 'Vertania-Wald: Bisasam (seltener Spawn), Raupy/Hornliu, Pikachu.' },
          { en: 'Mt. Moon: Clefairy, fossils (Kabuto/Omanyte — choose one).', de: 'Mondberg: Piepi, Fossilien (Kabuto/Amonitas — wähle eines).' },
          { en: 'Celadon City: Buy Porygon at Game Corner, get Eevee (Pikachu version).', de: 'Prismania City: Kaufe Porygon in der Spielhalle, erhalte Evoli (Pikachu-Version).' },
          { en: 'Seafoam Islands: Articuno. Power Plant: Zapdos. Victory Road: Moltres.', de: 'Seeschauminseln: Arktos. Kraftwerk: Zapdos. Siegesstraße: Lavados.' },
        ]
      },
    ]
  },

  go: {
    title: { en: 'Pokémon GO', de: 'Pokémon GO' },
    icon: '📱',
    sections: [
      {
        title: { en: 'Transfer to Home', de: 'Transfer zu Home' },
        items: [
          { en: 'Connect Pokémon GO to Pokémon Home via the GO Transporter.', de: 'Verbinde Pokémon GO mit Pokémon Home über den GO-Transporter.' },
          { en: 'Transfer costs energy — legendaries and shinies cost more. Energy recharges over time.', de: 'Transfer kostet Energie — Legendäre und Shinies kosten mehr. Energie lädt sich über Zeit auf.' },
          { en: 'First-time transfer from GO to Home grants a special Gigantamax Melmetal.', de: 'Der erste Transfer von GO zu Home gewährt ein spezielles Gigadynamax-Melmetal.' },
          { en: 'Meltan can only be evolved in GO (400 candy) — evolve before transferring!', de: 'Meltan kann nur in GO entwickelt werden (400 Bonbons) — entwickle vor dem Transfer!' },
        ]
      },
      {
        title: { en: 'Useful for Living Dex', de: 'Nützlich für Lebenden Dex' },
        items: [
          { en: 'Regional exclusives in GO (Tauros, Mr. Mime, Kangaskhan, Farfetch\'d) can fill Home gaps.', de: 'Regionale Exklusive in GO (Tauros, Pantimos, Kangama, Porenta) können Home-Lücken füllen.' },
          { en: 'Community Days are great for getting evolutions of rare Pokémon cheaply.', de: 'Community Days sind ideal, um Entwicklungen seltener Pokémon günstig zu bekommen.' },
          { en: 'Pokémon transferred from GO get the GO origin mark in Home.', de: 'Von GO übertragene Pokémon erhalten die GO-Herkunftsmarkierung in Home.' },
        ]
      },
    ]
  },
};
