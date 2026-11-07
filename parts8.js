// Hotspot map for Surah Al-Anfal (8): one dense poster.
// box: [x1, y1, x2, y2] in the image's own pixels.  key: verses the panel shows.  more: recalled verses.
// Each key was matched from the panel's wording to the verse text. Later entries sit on top of earlier ones.

const STRIP8 = "The poster's printed range doesn't match the verses this card describes; the popup shows the verses its words actually refer to.";

window.PARTS_BY_SURAH = Object.assign(window.PARTS_BY_SURAH || {}, {
  8: { info: { name: 'Al-Anfal', arName: 'الأنفال', total: 75 }, parts: [{
    id: 1, title: 'The Spoils of War', range: [1, 75], img: 'images/s8.webp', w: 1024, h: 1535,
    warn: "The 'Topic progression' strip has numbering slips: '42–48' is 45–48, '55–63' (Pharaoh) is 52–54, '59–63' (treaties) is 55–62, '64–66' shows hearts united (63) and the 20-vs-200 ratio (65–66). Verses 49–54 have no card. Each card's popup shows the verses its words describe.",
    spots: [
      { label: 'The bonus chest (scene)', box: [0, 0, 240, 300], key: [1], note: "Al-anfāl — 'the bounties (of war)' (1). Literally 'extras, what is given beyond what is due'." },
      { label: "Title: Al-Anfal — 'The Spoils of War'", box: [240, 0, 760, 120], key: [1] },
      { label: 'The hook', box: [350, 130, 550, 300], key: [1], note: "That the surah came after the companions disagreed over the spoils of Badr is reported in hadith and tafsir (e.g. Musnad Ahmad, from 'Ubada ibn as-Samit)." },
      { label: 'The army with the banner (scene)', box: [550, 130, 1024, 300], key: [5, 42] },
      { label: 'Essence in one line', box: [765, 10, 1024, 165], key: [10, 1, 63] },
      { label: "The memory story — 'the bonus chest'", box: [10, 310, 1014, 345], key: [], more: [1, 41, 63] },
      // row 1
      { label: '1 True owners', box: [10, 345, 178, 612], key: [1, 2, 3, 4], note: "'Their hearts become fearful when Allah is mentioned… it increases them in faith… they establish prayer and spend' (2–3)." },
      { label: '2 The reluctant march', box: [178, 345, 352, 612], key: [5, 6, 7, 8], note: "'You wished that the unarmed one (the caravan) would be yours, but Allah intended to establish the truth… and cut off the root of the disbelievers' (7)." },
      { label: '3 The night & morning of Badr', box: [352, 345, 595, 612], key: [9, 11, 17], more: [10, 12], note: "A thousand angels (9); drowsiness, rain, firm feet (11). 'The handful of dust' is from the sirah; the verse says 'you threw not when you threw, but it was Allah who threw' (17)." },
      { label: "'You did not throw when you threw; it was Allah who threw'", box: [360, 572, 595, 612], key: [17] },
      { label: '4 The obedience classroom', box: [595, 345, 808, 612], key: [20, 24, 26, 27, 28], note: "Hear and obey (20–21); 'Allah intervenes between a man and his heart' (24); 'you were few and oppressed' (26); 'do not betray' (27); 'wealth and children are a trial' (28)." },
      { label: '5 The Furqan lens', box: [808, 345, 1014, 612], key: [29, 30, 31, 36], note: "'If you fear Allah, He will grant you a criterion (furqān)' (29); plots (30), mockery (31), spending that becomes regret (36)." },
      // row 2
      { label: '6 The chest unlocks — the Day of Furqan', box: [10, 625, 255, 920], key: [41], note: "'One fifth is for Allah, the Messenger, near relatives, orphans, the needy and the traveller… on the Day of Criterion, the day the two armies met' (41). The poster's list leaves out the near relatives." },
      { label: '7 The field manual', box: [258, 628, 468, 660], key: [45, 46, 47, 48] },
      { label: 'Stand firm. Remember Allah abundantly.', box: [258, 660, 368, 760], key: [45] },
      { label: "Do not quarrel — join your brothers' row", box: [368, 660, 468, 760], key: [46], note: "'Do not dispute and lose courage, and your strength would depart' (46)." },
      { label: 'Do not set out boastfully like the Mushriks', box: [258, 760, 368, 920], key: [47], note: "'Those who came forth from their homes insolently and to be seen by people' (47)." },
      { label: 'Shaitan — the exciting of doubt', box: [368, 760, 468, 920], key: [48], note: "'Satan made their deeds pleasing to them… then he turned on his heels' (48)." },
      { label: '8 The law of rise & fall', box: [468, 628, 640, 920], key: [53], more: [52, 54], note: "'Allah would not change a favour He had bestowed upon a people until they change what is within themselves' (53). Pharaoh's people: 52, 54." },
      { label: '9 Treaties & strength', box: [640, 628, 838, 660], key: [58, 60, 61] },
      { label: 'Do not betray. If you fear treachery, throw the treaty back openly.', box: [640, 660, 775, 800], key: [58], note: "'Throw (their treaty) back to them on equal terms' (58)." },
      { label: 'Prepare your strength (shield)', box: [775, 660, 838, 830], key: [60], note: "'Prepare against them whatever you are able of power' (60). The label text on the poster is garbled." },
      { label: 'But if they incline toward peace, incline toward it', box: [640, 800, 838, 920], key: [61], note: "'If they incline to peace, then incline to it and rely upon Allah' (61)." },
      { label: '10 The real bonus', box: [838, 628, 1014, 920], key: [63, 70], note: "'If you had spent all that is in the earth, you could not have brought their hearts together' (63); captives: 'He will give you better than what was taken from you' (70)." },
      // strip
      { label: 'Topic progression walkthrough (75 verses)', box: [10, 932, 1014, 960], key: [], more: [1, 41, 75], note: "Correct: Al-Anfal has 75 verses." },
      { label: '1–4 First mend hearts', box: [12, 962, 83, 1150], key: [1, 2, 3, 4] },
      { label: '5–8 Reluctant march', box: [83, 962, 155, 1150], key: [5, 6, 7, 8] },
      { label: '9–19 Badr night & morning', box: [155, 962, 225, 1150], key: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
      { label: '20–28 Obedience curriculum', box: [225, 962, 295, 1150], key: [20, 21, 22, 23, 24, 25, 26, 27, 28] },
      { label: '29 Taqwa earns you a lens', box: [295, 962, 365, 1150], key: [29] },
      { label: '30–40 Makkah case & plots', box: [365, 962, 437, 1150], key: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
      { label: '41 Legal ruling: one-fifth', box: [437, 962, 508, 1150], key: [41] },
      { label: "42–44 Allah's hidden strength", box: [508, 962, 580, 1150], key: [42, 43, 44], note: "Each side shown as few in the other's eyes (43–44)." },
      { label: "Printed '42–48' — battle ethics", box: [580, 962, 650, 1150], key: [45, 46, 47, 48], note: STRIP8 + " Firmness, remembrance, no quarrelling, no boasting = 45–48." },
      { label: "Printed '55–63' — Pharaoh patterns", box: [650, 962, 722, 1150], key: [52, 53, 54], more: [49, 50, 51], note: STRIP8 + " Pharaoh and 'until they change what is within themselves' = 52–54." },
      { label: "Printed '59–63' — treaty / treachery", box: [722, 962, 793, 1150], key: [55, 56, 57, 58, 59, 60, 61, 62], note: STRIP8 + " Treaty-breakers and open commands = 55–62." },
      { label: "Printed '64–66' — impacts: hearts united by Allah", box: [793, 962, 865, 1150], key: [63, 64, 65, 66], note: STRIP8 + " 'Hearts united' is 63; 64–66 are 'Allah is sufficient for you' and the 20-against-200 ratio." },
      { label: '67–71 Captives, gentle correction', box: [865, 962, 937, 1150], key: [67, 68, 69, 70, 71] },
      { label: '72–75 Brotherhood in faith', box: [937, 962, 1012, 1150], key: [72, 73, 74, 75], note: "Muhājirūn and those who 'gave shelter and aided' (the Ansar) are allies of one another (72, 74)." },
      // bottom
      { label: 'Micro nazm — internal architecture', box: [15, 1175, 262, 1205], key: [], more: [1, 29, 41, 22, 55] },
      { label: 'Delayed answer: question in v.1 → ruling in v.41', box: [20, 1210, 262, 1235], key: [1, 41] },
      { label: 'Heart-surgery before hand receives', box: [20, 1235, 262, 1260], key: [1, 2], more: [41] },
      { label: 'Furqan twice: v.29 & v.41', box: [20, 1260, 262, 1305], key: [29, 41], note: "Checked: furqān appears in exactly these two verses." },
      { label: "'Worst of creatures' twice: v.22 & v.55", box: [20, 1305, 262, 1350], key: [22, 55], note: "Checked: sharr ad-dawābb in 22 and 55." },
      { label: 'Heart motif', box: [20, 1350, 262, 1395], key: [2, 12, 24, 63] },
      { label: 'Water double meaning: rain (v.11), sea drowns (v.54)', box: [20, 1395, 262, 1440], key: [11, 54] },
      { label: "Ring structure: 'set right' at start — relations right at end", box: [20, 1440, 262, 1490], key: [1, 72, 75] },
      { label: 'Macro nazm — pairing & placement', box: [268, 1175, 510, 1500], key: [55, 56, 57, 58], note: "At-Tawbah (9) has no Bismillah — a well-known fact of the mushaf. Surahs 6, 7 and 9 aren't on this site yet; the treaty-breakers seam is 8:55–58." },
      { label: 'The amud — central pillar', box: [515, 1175, 740, 1500], key: [41, 10, 63] },
      { label: 'Zooming all the way out', box: [745, 1175, 1014, 1500], key: [10, 28] },
    ],
  }] },
});
