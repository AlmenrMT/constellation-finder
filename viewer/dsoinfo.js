// Notable deep-sky objects (galaxies, nebulae, star clusters) by official
// constellation — shown on the info page as "what else is out there" beyond
// the stars used in the portrait itself, and plotted on the sky map. ra/dec
// are approximate J2000 coordinates in decimal degrees — accurate enough for
// a finder chart, not precision astrometry. Curated, not exhaustive: only
// well-documented, genuinely notable objects are listed here. A missing or
// empty entry just means nothing especially notable is catalogued for that
// constellation yet — not that there's nothing there.
window.DSO_INFO = {
  "Andromeda": [{ name: "Andromeda Galaxy (M31)", note: "The nearest large spiral galaxy to ours — visible to the naked eye from a dark sky.", ra: 10.68, dec: 41.27 }],
  "Aquarius": [
    { name: "Saturn Nebula (NGC 7009)", note: "A small, bright planetary nebula.", ra: 316.03, dec: -11.36 },
    { name: "Helix Nebula (NGC 7293)", note: "One of the closest planetary nebulae to Earth.", ra: 337.41, dec: -20.84 },
  ],
  "Aquila": [{ name: "NGC 6709", note: "An open star cluster.", ra: 283.99, dec: 10.35 }],
  "Auriga": [{ name: "M36, M37, M38", note: "Three bright open star clusters — easy binocular targets.", ra: 84.07, dec: 34.14 }],
  "Bootes": [{ name: "NGC 5466", note: "A faint globular cluster.", ra: 211.37, dec: 28.53 }],
  "Cancer": [{ name: "Beehive Cluster (M44)", note: "A large, bright open cluster visible to the naked eye.", ra: 130.1, dec: 19.67 }],
  "Canis Major": [{ name: "M41", note: "An open cluster near Sirius.", ra: 101.5, dec: -20.75 }],
  "Capricornus": [{ name: "M30", note: "A globular cluster.", ra: 325.09, dec: -23.18 }],
  "Cassiopeia": [
    { name: "Owl Cluster (NGC 457)", note: "An open cluster that resembles an owl.", ra: 22.0, dec: 58.28 },
    { name: "M52", note: "A rich open cluster.", ra: 351.2, dec: 61.59 },
  ],
  "Cepheus": [{ name: "NGC 188", note: "One of the oldest known open clusters.", ra: 11.8, dec: 85.25 }],
  "Cetus": [{ name: "M77", note: "A bright spiral galaxy.", ra: 40.67, dec: -0.01 }],
  "Coma Berenices": [
    { name: "Coma Star Cluster", note: "A large, loose naked-eye star cluster.", ra: 185.0, dec: 26.0 },
    { name: "Black Eye Galaxy (M64)", note: "A spiral galaxy with a striking dark dust band.", ra: 194.18, dec: 21.68 },
  ],
  "Corvus": [{ name: "Antennae Galaxies (NGC 4038/4039)", note: "A pair of colliding galaxies.", ra: 180.47, dec: -18.87 }],
  "Cygnus": [
    { name: "North America Nebula (NGC 7000)", note: "A large emission nebula shaped like the continent.", ra: 314.7, dec: 44.5 },
    { name: "Veil Nebula", note: "The remnant of an ancient supernova.", ra: 312.75, dec: 30.7 },
  ],
  "Draco": [{ name: "Cat's Eye Nebula (NGC 6543)", note: "A bright, colorful planetary nebula.", ra: 269.64, dec: 66.63 }],
  "Eridanus": [{ name: "NGC 1300", note: "A well-known barred spiral galaxy.", ra: 49.92, dec: -19.41 }],
  "Gemini": [
    { name: "M35", note: "A large open cluster.", ra: 92.25, dec: 24.34 },
    { name: "Eskimo Nebula (NGC 2392)", note: "A planetary nebula.", ra: 110.75, dec: 20.91 },
  ],
  "Hercules": [{ name: "Great Globular Cluster (M13)", note: "One of the brightest globular clusters visible from the northern sky.", ra: 250.42, dec: 36.46 }],
  "Hydra": [{ name: "M83", note: "A bright barred spiral galaxy.", ra: 204.25, dec: -29.87 }],
  "Leo": [{ name: "Leo Triplet (M65, M66, NGC 3628)", note: "A group of interacting spiral galaxies.", ra: 170.06, dec: 12.99 }],
  "Lepus": [{ name: "M79", note: "A globular cluster.", ra: 81.04, dec: -24.52 }],
  "Lyra": [{ name: "Ring Nebula (M57)", note: "A famous, bright planetary nebula.", ra: 283.4, dec: 33.03 }],
  "Monoceros": [
    { name: "Rosette Nebula", note: "A large emission nebula surrounding an open cluster.", ra: 97.95, dec: 4.95 },
    { name: "Christmas Tree Cluster", note: "A festive-looking open cluster.", ra: 100.25, dec: 9.89 },
  ],
  "Ophiuchus": [{ name: "M10, M12", note: "Two bright globular clusters.", ra: 254.29, dec: -4.1 }],
  "Orion": [
    { name: "Orion Nebula (M42)", note: "A vast stellar nursery, visible to the naked eye below Orion's Belt.", ra: 83.82, dec: -5.39 },
    { name: "Horsehead Nebula", note: "A famous dark nebula silhouette.", ra: 85.24, dec: -2.46 },
  ],
  "Pegasus": [{ name: "M15", note: "A dense, bright globular cluster.", ra: 322.49, dec: 12.17 }],
  "Perseus": [{ name: "Double Cluster (NGC 869/884)", note: "Two neighboring open clusters — a classic binocular target.", ra: 34.75, dec: 57.13 }],
  "Puppis": [{ name: "M46, M47", note: "A pair of open clusters.", ra: 115.45, dec: -14.81 }],
  "Sagittarius": [
    { name: "Lagoon Nebula (M8)", note: "A bright star-forming nebula.", ra: 270.9, dec: -24.38 },
    { name: "Trifid Nebula (M20)", note: "A colorful nebula split into lobes by dark dust lanes.", ra: 270.62, dec: -23.03 },
  ],
  "Scorpius": [
    { name: "Butterfly Cluster (M6)", note: "An open cluster shaped like a butterfly.", ra: 265.08, dec: -32.25 },
    { name: "Ptolemy Cluster (M7)", note: "A large, bright naked-eye open cluster.", ra: 268.46, dec: -34.79 },
  ],
  "Scutum": [{ name: "Wild Duck Cluster (M11)", note: "A dense, rich open cluster.", ra: 282.77, dec: -6.27 }],
  "Serpens": [{ name: "Eagle Nebula (M16)", note: "Home to the famous 'Pillars of Creation'.", ra: 274.7, dec: -13.81 }],
  "Taurus": [
    { name: "Pleiades (M45)", note: "The 'Seven Sisters' — a bright naked-eye open cluster.", ra: 56.75, dec: 24.12 },
    { name: "Crab Nebula (M1)", note: "The remnant of a supernova observed in 1054 AD.", ra: 83.63, dec: 22.01 },
  ],
  "Triangulum": [{ name: "Triangulum Galaxy (M33)", note: "A face-on spiral galaxy — one of the most distant objects visible to the naked eye.", ra: 23.46, dec: 30.66 }],
  "Ursa Major": [{ name: "M81 and M82", note: "A bright spiral galaxy (M81) paired closely with the 'Cigar Galaxy' (M82).", ra: 148.89, dec: 69.07 }],
  "Virgo": [{ name: "Virgo Cluster", note: "A vast cluster of thousands of galaxies, including the giant elliptical M87.", ra: 187.7, dec: 12.39 }],
  "Vulpecula": [{ name: "Dumbbell Nebula (M27)", note: "A bright, large planetary nebula.", ra: 299.9, dec: 22.72 }],
};
