// Hotspot map for Surah Ash-Shura (42): two posters.
// box: [x1, y1, x2, y2] in the image's own pixels.  key: verses the panel shows.  more: recalled verses.
// Poster 1 prints no verse numbers: each card was matched from its wording to the verse text.
// Later entries sit on top of earlier ones, so detail boxes come after the panel that contains them.

window.PARTS_BY_SURAH = Object.assign(window.PARTS_BY_SURAH || {}, {
  42: { info: { name: 'Ash-Shura', arName: 'الشورى', total: 53 }, parts: [
  {
    id: 1, title: 'The Sealed Letter and the Balance', range: [1, 19], img: 'images/s42-1.webp', w: 941, h: 1672,
    warn: "Part 1 prints no verse numbers: each card was identified from its wording, and its popup shows the full verses so you can check.",
    spots: [
      { label: 'Title: Ash-Shura — the sealed letter and the balance', box: [150, 0, 820, 112], key: [38, 10], note: "Ash-Shūrā: 'consultation' — 'whose affair is consultation among themselves' (38)." },
      // 1
      { label: '1 A town tears itself apart over rules', box: [5, 112, 232, 245], key: [10], note: "The story's set-up. The surah's answer: 'In anything over which you disagree, its ruling is to Allah' (10)." },
      { label: 'The great hall (scene)', box: [232, 112, 941, 245], key: [10] },
      // 2
      { label: '2 The faceless courier places a sealed letter', box: [5, 248, 232, 405], key: [1, 2], note: "The 'codes' are the opening letters: Ḥā Mīm (1), 'Ayn Sīn Qāf (2)." },
      { label: 'The courier (scene)', box: [290, 248, 470, 405], key: [3] },
      { label: 'Ha Mim • Ayn Sin Qaf — the sealed letter', box: [470, 310, 680, 390], key: [1, 2] },
      // 3
      { label: '3 The same letter came to earlier messengers from the Mighty, the Wise', box: [5, 408, 232, 568], key: [3, 4, 5] },
      { label: 'Praise to the Mighty • the Wise', box: [290, 412, 500, 470], key: [3, 5], note: "'Allah, the Exalted in Might, the Wise' (3); the angels 'exalt with praise of their Lord' (5)." },
      { label: 'The courier reading the letter (scene)', box: [500, 412, 630, 560], key: [3] },
      { label: 'Forgiveness for people below', box: [630, 412, 870, 470], key: [5], note: "'The heavens almost break from above them' — 'the ceiling creaks' — and the angels 'ask forgiveness for those on earth' (5)." },
      { label: 'The hall under the sky (scene)', box: [232, 470, 941, 568], key: [4, 5] },
      // 4
      { label: 'أم القرى — Umm al-Qura', box: [95, 572, 215, 610], key: [7], note: "'That you may warn the Mother of Cities and those around it' (7). Saheeh International adds [Makkah]." },
      { label: '4 Other bosses; read in their own language; gardens or fire; no protector', box: [5, 610, 232, 795], key: [6, 7, 8] },
      { label: 'Other bosses', box: [310, 605, 375, 640], key: [6], note: "'Those who take as allies other than Him' (6)." },
      { label: 'The Day of Gathering', box: [485, 572, 645, 598], key: [7], note: "Yawm al-jam' — 'the Day of Assembly, about which there is no doubt' (7)." },
      { label: 'Not their guard — only the mailman', box: [495, 665, 630, 700], key: [6], note: "'You are not over them a manager (wakīl)' (6)." },
      { label: 'To gardens', box: [665, 598, 760, 700], key: [7] },
      { label: 'To fire', box: [770, 598, 941, 700], key: [7], note: "'A party will be in Paradise and a party in the Blaze' (7)." },
      { label: 'The audience (scene)', box: [232, 700, 941, 755], key: [8], note: "'If Allah willed, He could have made them one religion… the wrongdoers have not any protector or helper' (8)." },
      // 5
      { label: '5 Arguments rise upward, never sideways', box: [5, 798, 232, 905], key: [9, 10], note: "'In anything over which you disagree — its ruling is to Allah' (10)." },
      { label: 'Maker of sky • ground', box: [260, 758, 352, 790], key: [11] },
      { label: 'Created in pairs', box: [260, 798, 352, 830], key: [11], note: "'He has made for you from yourselves mates, and among the cattle mates' (11)." },
      { label: 'Nothing is like Him', box: [260, 838, 352, 870], key: [11], note: "Laysa ka-mithlihī shay' (11)." },
      { label: 'Arrows rising from the round table (scene)', box: [352, 755, 690, 875], key: [10] },
      { label: 'He holds the keys', box: [690, 765, 785, 800], key: [12], note: "'To Him belong the keys (maqālīd) of the heavens and the earth' (12)." },
      { label: 'More to one • less to another', box: [690, 805, 800, 840], key: [12], note: "'He extends provision for whom He wills and restricts it' (12)." },
      // 6
      { label: '6 The courier lays one undivided blueprint', box: [5, 905, 232, 1000], key: [13] },
      { label: 'شريعة — the blueprint', box: [400, 880, 650, 925], key: [13], note: "Shara'a — 'He has ordained for you of religion' (13)." },
      { label: 'Noah • Abraham • Moses • Jesus • now to you', box: [345, 925, 705, 955], key: [13] },
      { label: 'Build it • أقيموا الدين • do not split it', box: [330, 955, 735, 995], key: [13], note: "'To establish the religion and not be divided therein' (13)." },
      // 7
      { label: '7 Earlier groups tore the blueprint from jealousy', box: [5, 1003, 232, 1138], key: [14], note: "'They did not become divided until after knowledge had come to them — out of jealous animosity (baghyan)' (14)." },
      { label: 'The torn blueprint (scene)', box: [232, 1003, 645, 1135], key: [14] },
      { label: 'Deadline already written', box: [645, 1010, 830, 1130], key: [14], note: "'If not for a word that preceded from your Lord until a specified time, it would have been concluded between them' (14)." },
      // 8
      { label: '8 The courier stands before a quiet room; argument rejected', box: [5, 1140, 232, 1255], key: [15, 16] },
      { label: 'I believe what was sent down', box: [240, 1140, 405, 1162], key: [15] },
      { label: 'I was ordered to be fair', box: [240, 1167, 405, 1192], key: [15], note: "'I have been commanded to do justice among you' (15)." },
      { label: 'Your Lord is my Lord', box: [240, 1197, 405, 1222], key: [15] },
      { label: 'The courier (scene)', box: [405, 1140, 500, 1250], key: [15] },
      { label: 'My work is mine • your work is yours', box: [505, 1140, 718, 1162], key: [15] },
      { label: 'God will gather us', box: [505, 1167, 718, 1192], key: [15] },
      { label: 'To Him is the journey', box: [505, 1197, 718, 1222], key: [15] },
      { label: 'Beyond him, anyone still arguing speaks into an empty room', box: [735, 1135, 941, 1250], key: [16], note: "'Those who argue concerning Allah after He has been responded to — their argument is invalid with their Lord' (16)." },
      // 9
      { label: '9 The letter-box holds exactly two items: the Book and the Balance', box: [5, 1258, 232, 1360], key: [17] },
      { label: 'The Book (scene)', box: [245, 1240, 420, 1355], key: [17] },
      { label: 'The Balance (scene)', box: [420, 1240, 575, 1355], key: [17] },
      { label: 'The Book + the Balance', box: [580, 1245, 838, 1285], key: [17], note: "'It is Allah who has sent down the Book in truth and the balance (al-mīzān)' (17)." },
      { label: 'No one knows how close the Hour is', box: [608, 1292, 788, 1335], key: [17], note: "'What will make you perceive? Perhaps the Hour is near' (17)." },
      // 10
      { label: '10 Mockers demand the Hour; believers are fearful; provision reaches everyone', box: [5, 1362, 232, 1505], key: [18, 19] },
      { label: 'Hurry the Hour! (the mockers)', box: [232, 1350, 530, 1440], key: [18], note: "'Those who do not believe in it are impatient for it' (18)." },
      { label: 'The believers in quiet fear', box: [530, 1350, 941, 1440], key: [18], note: "'Those who believe are fearful of it and know that it is the truth' (18)." },
      { label: 'Provision reaches everyone — subtle, gentle', box: [232, 1440, 941, 1505], key: [19], note: "'Allah is Subtle (laṭīf) with His servants; He gives provision to whom He wills' (19)." },
      // bottom
      { label: 'A. Essence', box: [5, 1510, 175, 1672], key: [10, 38, 53] },
      { label: 'B. Why the name?', box: [178, 1510, 355, 1672], key: [38], note: "Classical lexicons give shāra al-'asal: 'he drew honey out (of the comb)' as a root meaning of sh-w-r. A word-history note, not a verse." },
      { label: 'C. Part 1 topic map', box: [358, 1510, 520, 1572], key: [], more: [1, 10, 17] },
      { label: '1–9: the letter and its Owner', box: [365, 1572, 520, 1605], key: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { label: '10–16: one undivided design', box: [365, 1605, 520, 1640], key: [10, 11, 12, 13, 14, 15, 16] },
      { label: '17–19: the Book, Balance and approaching Hour', box: [365, 1640, 520, 1672], key: [17, 18, 19] },
      { label: 'D. Nazm + place', box: [523, 1510, 745, 1672], key: [3, 13], more: [21, 51, 52], note: "Checked: revelation opens (3) and closes the surah (51–52); 'ordained' (shara'a) appears in 13 and again for the false partners in 21. Ha-Mim surahs are 40–46, and Ash-Shura alone has a second set of opening letters ('Ayn Sīn Qāf, 2). The 'Farahi–Islahi group' is a scholar's grouping of surahs, not a verse." },
      { label: 'E. Amud — the spine', box: [748, 1510, 941, 1672], key: [52, 38, 43, 53], note: "Amr through the surah: 'a spirit of Our command' (52), 'their affair is consultation' (38), 'matters requiring determination' (43), 'to Allah all matters return' (53)." },
    ],
  },
  {
    id: 2, title: 'The Two Harvests, Round Table and Return', range: [20, 53], img: 'images/s42-2.webp', w: 941, h: 1672,
    spots: [
      { label: 'Title: Part 2 — every affair comes down from Him and goes back to Him', box: [150, 0, 820, 108], key: [53] },
      // 11
      { label: '11 Two seed packets (20)', box: [5, 108, 225, 245], key: [20], note: "Ḥarth — 'harvest': the Hereafter's is increased; this world's is given, with no share after." },
      { label: 'Later harvest multiplied', box: [225, 108, 445, 245], key: [20] },
      { label: "Plant for the later harvest / plant only for today", box: [445, 160, 660, 245], key: [20] },
      { label: "Today's handful — nothing later", box: [660, 108, 941, 245], key: [20] },
      // 12
      { label: '12 An unauthorized rulebook exposed (21–22)', box: [5, 248, 225, 395], key: [21, 22] },
      { label: 'Unauthorized rulebook exposed — forged, not authorized', box: [225, 248, 520, 395], key: [21], note: "'Have they other deities who have ordained for them a religion to which Allah has not consented?' (21)." },
      { label: 'Deadline holds back judgment', box: [520, 248, 605, 395], key: [21], note: "'If not for the decisive word, it would have been concluded between them' (21)." },
      { label: 'Garden meadows — whatever they desire', box: [605, 248, 941, 395], key: [22], note: "'In lush regions of the gardens, having whatever they will' (22)." },
      // 13
      { label: '13 No fee — only kindness; God erases falsehood (23–26)', box: [5, 398, 225, 545], key: [23, 24, 25, 26] },
      { label: 'No fee — only kindness', box: [225, 398, 340, 545], key: [23], note: "'I do not ask you for this message any payment, only good will through kinship' (23)." },
      { label: 'Love among relatives', box: [340, 398, 450, 545], key: [23], note: "Al-mawaddata fi l-qurbā (23)." },
      { label: 'God erases falsehood and confirms truth', box: [450, 398, 720, 545], key: [24], note: "'Do they say he invented a lie about Allah?… Allah eliminates (yamḥu) falsehood and establishes the truth' (24)." },
      { label: 'He accepts, wipes, answers, and adds more', box: [720, 398, 941, 545], key: [25, 26] },
      // 14
      { label: '14 Provision measured; rain; harm from your own hands (27–31)', box: [5, 548, 225, 700], key: [27, 28, 29, 30, 31] },
      { label: 'Provision measured', box: [245, 548, 345, 700], key: [27], note: "'If Allah had extended provision excessively, they would have committed tyranny… He sends it down in an amount (bi-qadar)' (27)." },
      { label: 'Bullies restrained', box: [345, 548, 448, 700], key: [27] },
      { label: 'Rain after despair', box: [448, 548, 580, 700], key: [28] },
      { label: 'Creatures fill sky and earth', box: [580, 548, 700, 700], key: [29] },
      { label: 'Harm from our own hands', box: [700, 548, 805, 700], key: [30], note: "'Whatever strikes you of disaster is for what your hands have earned; but He pardons much' (30)." },
      { label: 'No escape', box: [805, 548, 941, 700], key: [31] },
      // 15
      { label: '15 Mountain-like ships (32–35)', box: [5, 703, 225, 845], key: [32, 33, 34, 35] },
      { label: 'Ships move like mountains', box: [225, 703, 428, 815], key: [32], note: "Al-jawārī fi l-baḥri ka-l-a'lām (32)." },
      { label: 'Wind stops — ships freeze', box: [428, 703, 640, 815], key: [33] },
      { label: 'Sign for the patient and grateful', box: [640, 703, 800, 815], key: [33] },
      { label: 'Arguers know — nowhere to run', box: [800, 703, 941, 815], key: [35] },
      { label: 'He could sink them for what they earned, yet pardons much', box: [290, 815, 685, 845], key: [34] },
      // 16
      { label: '16 Worldly gifts are a short snack (36)', box: [5, 848, 225, 920], key: [36] },
      { label: 'Short snack', box: [225, 848, 390, 920], key: [36], note: "'Whatever you have been given is but enjoyment (matā') of the worldly life' (36)." },
      { label: 'Better and lasting', box: [390, 848, 941, 920], key: [36], note: "'What is with Allah is better and more lasting' (36)." },
      // 17
      { label: '17 The round-table charter (37–43)', box: [5, 922, 225, 1110], key: [37, 38, 39, 40, 41, 42, 43] },
      { label: 'The round table (scene)', box: [225, 955, 941, 1110], key: [38] },
      { label: 'The round-table charter (37–43)', box: [320, 925, 720, 955], key: [37, 38, 39, 40, 41, 42, 43] },
      { label: 'Avoid great sins — forgive anger', box: [445, 962, 585, 992], key: [37] },
      { label: 'Answer — pray — consult — spend', box: [258, 985, 380, 1015], key: [38], note: "'Responded to their Lord, established prayer, their affair is consultation (shūrā) among themselves, and they spend' (38) — the verse that names the surah." },
      { label: 'Defend when attacked', box: [620, 985, 720, 1015], key: [39] },
      { label: 'Payback: exactly equal', box: [245, 1035, 395, 1060], key: [40], note: "'The retribution for an evil act is an evil one like it' (40)." },
      { label: 'Forgive + repair: God rewards', box: [620, 1035, 755, 1065], key: [40], note: "'Whoever pardons and makes reconciliation, his reward is from Allah' (40)." },
      { label: 'No blame on the defender', box: [420, 1070, 535, 1102], key: [41] },
      { label: 'Blame the bully — patience is strength', box: [560, 1070, 710, 1102], key: [42, 43] },
      // 18
      { label: '18 On that Day: at the door, no return (44–48)', box: [5, 1112, 225, 1258], key: [44, 45, 46, 47, 48] },
      { label: 'At the door — no return', box: [225, 1112, 365, 1258], key: [44, 45], note: "'Is there for return any way?' (44); 'looking from a covert glance' (45)." },
      { label: 'Answer now — before the Day', box: [365, 1112, 490, 1258], key: [47] },
      { label: 'Courier only the mailman', box: [490, 1112, 640, 1258], key: [48], note: "'Upon you is only notification' (48)." },
      { label: 'People cheer the gifts', box: [640, 1112, 790, 1258], key: [48] },
      { label: 'People sulk when they leave', box: [790, 1112, 941, 1258], key: [48] },
      // 19
      { label: '19 God gives daughters, sons, both or none; three ways He speaks (49–52)', box: [5, 1260, 225, 1400], key: [49, 50, 51, 52] },
      { label: 'God gives: daughters, sons, both, or none', box: [225, 1260, 478, 1400], key: [49, 50] },
      { label: 'Speaks into the heart', box: [478, 1260, 568, 1400], key: [51], note: "The verse says 'by revelation (waḥy)'. 'Into the heart' is the poster's picture of it — commentators explain this way as inspiration." },
      { label: 'Speaks from behind a screen', box: [568, 1260, 668, 1400], key: [51], note: "'Or from behind a partition (ḥijāb)' (51)." },
      { label: 'Speaks through a messenger delivering exactly what He permits', box: [668, 1260, 810, 1400], key: [51] },
      { label: 'Courier had not known Book or faith — it was made a light', box: [810, 1260, 941, 1400], key: [52], note: "'You did not know what is the Book or faith, but We have made it a light' (52)." },
      // 20
      { label: '20 Lights down. Every file returns to the Head of the table (53)', box: [5, 1402, 225, 1508], key: [53] },
      { label: 'The empty table (scene)', box: [225, 1402, 941, 1508], key: [53], note: "'Unquestionably, to Allah do all matters return' (53)." },
      // bottom
      { label: 'A. Part 2 topic map', box: [5, 1510, 180, 1545], key: [], more: [20, 32, 44] },
      { label: '20–31: harvests, counterfeit law, return, measured provision, rain', box: [12, 1545, 180, 1590], key: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
      { label: '32–43: stopped ships, temporary goods, consultation charter', box: [12, 1590, 180, 1625], key: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43] },
      { label: '44–53: final return, families, three modes of speech, light', box: [12, 1625, 180, 1672], key: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53] },
      { label: 'B. Micro nazm', box: [183, 1510, 375, 1540], key: [], more: [3, 13, 21, 38, 52] },
      { label: 'Ring: revelation opens and closes', box: [188, 1540, 375, 1556], key: [3, 51, 52] },
      { label: 'Mirror: God ordains (13) ↔ false partners ordain (21)', box: [188, 1556, 375, 1586], key: [13, 21] },
      { label: 'BAGHY: splitting 14 • wealth 27 • attack 39 • tyranny 42', box: [188, 1586, 375, 1618], key: [14, 27, 39, 42], note: "Checked: the root b-gh-y occurs in exactly these four verses." },
      { label: 'Cure: SHURA 38, AHWA ↔ WAHY', box: [188, 1618, 375, 1640], key: [38, 15, 51, 52], note: "Ahwā' — their inclinations (15) — against waḥy, revelation (51–52)." },
      { label: 'WALI thread: 6, 8, 9, 28, 31, 44, 46', box: [188, 1640, 375, 1672], key: [6, 8, 9, 28, 31, 44, 46], note: "Checked: walī/awliyā' occurs in exactly these seven verses." },
      { label: 'C. Measure thread', box: [380, 1510, 560, 1672], key: [17, 27, 40], more: [30, 34, 37, 43], note: "Balance 17, measured provision 27, equal payback 40. Pardon/forgiveness: 30, 34, 37, 40, 43 — checked." },
      { label: 'D. Macro nazm', box: [565, 1510, 745, 1672], key: [2], note: "Neighbouring surahs: Fussilat (41:34 'repel evil with what is better'), Az-Zukhruf (43) and Al-Hujurat (49) aren't on this site yet. The 'Farahi–Islahi group' is a scholar's grouping of surahs." },
      { label: 'E. Amud — amr', box: [748, 1510, 941, 1672], key: [52, 38, 43, 53] },
    ],
  },
  ] },
});
