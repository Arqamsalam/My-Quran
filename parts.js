// Hotspot map for each infographic.
// box: [x1, y1, x2, y2] in the image's own pixels (images are ~941 x 1672).
// key:  verses the infographic cites for that panel.
// more: neighbouring verses of the same passage that the panel summarises but does not cite.
// note: a one-line plain-language "big idea" to help memory.

window.PARTS = [
  {
    id: 1, title: "The Book and Three Kinds of People", range: [2, 29], img: "images/part1.webp", w: 941, h: 1672,
    spots: [
      { label: "Opening test", box: [28, 175, 302, 307], key: [2], more: [], note: "One Book, three reactions: the whole opening is a mirror held up to the reader." },
      // scenes
      { label: "① The Steady Book (scene)", box: [50, 600, 445, 790], key: [2], more: [1], note: "Like a lighthouse: it doesn't move — ships either steer by it or crash." },
      { label: "② The Guided (scene)", box: [100, 360, 360, 550], key: [3, 4, 5], more: [], note: "Belief in the unseen + prayer + giving + certainty of the Hereafter = success." },
      { label: "③ The Sealed (scene)", box: [440, 225, 700, 385], key: [6, 7], more: [], note: "A sealed letter: the message is right there, but nothing gets in." },
      { label: "④ The Double-Faced (scene)", box: [640, 290, 941, 505], key: [8, 9, 10, 11, 12, 13, 14], more: [15, 16], note: "They wear two masks — but the only one fooled is the wearer." },
      { label: "⑤ Fire Without Light (scene)", box: [445, 465, 640, 680], key: [17, 18], more: [], note: "They had the light for a moment, then lost it — left deaf, dumb and blind." },
      { label: "⑥ Storm Without Guidance (scene)", box: [690, 520, 941, 805], key: [19, 20], more: [], note: "Walking only when lightning flashes: guidance used only when it suits them." },
      { label: "⑦ The Call to Everyone (scene)", box: [400, 755, 690, 960], key: [21, 22, 23, 24], more: [25], note: "The earth is a bed, the sky a roof: look at the house, and you'll know the Builder." },
      { label: "⑧ Life, Death, Return (scene)", box: [700, 830, 941, 1005], key: [28], more: [26, 27, 29], note: "Dead → alive → dead → alive → back to Him. Five stops on one road." },
      // text cards
      { label: "① The Steady Book", box: [10, 1015, 467, 1150], key: [2], more: [1] },
      { label: "② The Guided", box: [474, 1015, 932, 1150], key: [3, 4, 5] },
      { label: "③ The Sealed", box: [10, 1158, 467, 1318], key: [6, 7] },
      { label: "④ The Double-Faced", box: [474, 1158, 932, 1318], key: [8, 9, 10, 11, 12, 13, 14], more: [15, 16] },
      { label: "⑤ Fire Without Light", box: [10, 1323, 467, 1450], key: [17, 18] },
      { label: "⑥ Storm Without Guidance", box: [474, 1323, 932, 1450], key: [19, 20] },
      { label: "⑦ The Call to Everyone", box: [10, 1455, 467, 1600], key: [21, 22, 23, 24], more: [25] },
      { label: "⑧ Life, Death, Return", box: [474, 1455, 932, 1600], key: [28], more: [26, 27, 29] },
    ],
  },
  {
    id: 2, title: "Adam: Knowledge, Pride, Fall and Guidance", range: [30, 39], img: "images/part2.webp", w: 941, h: 1672,
    spots: [
      { label: "① The Khalifah", box: [55, 172, 402, 318], key: [30], note: "The angels ask a sincere question; Allah's answer: 'I know what you do not know.'" },
      { label: "① The Khalifah (scene)", box: [0, 318, 480, 545], key: [30] },
      { label: "② The Names", box: [552, 178, 878, 288], key: [31, 32, 33], note: "Knowledge is Adam's honour — and the angels humbly admit what they don't know." },
      { label: "② The Names (scene)", box: [490, 288, 941, 560], key: [31, 32, 33] },
      { label: "③ The First Refusal", box: [55, 560, 390, 655], key: [34], note: "The first sin was not ignorance — it was pride." },
      { label: "③ The First Refusal (scene)", box: [0, 655, 500, 885], key: [34] },
      { label: "④ The Fenced Tree", box: [530, 562, 880, 695], key: [35, 36], note: "A whole garden allowed, one tree forbidden — and Shaytan points at the one." },
      { label: "④ The Fenced Tree (scene)", box: [500, 695, 941, 935], key: [35, 36] },
      { label: "⑤ Words of Return", box: [55, 912, 405, 1020], key: [37], note: "Iblis argued; Adam repented. Same slip, opposite endings." },
      { label: "⑤ Words of Return (scene)", box: [90, 1020, 470, 1265], key: [37] },
      { label: "⑥ The Master Contract", box: [528, 922, 880, 1055], key: [38, 39], note: "Follow the guidance → no fear, no grief. Reject it → the Fire." },
      { label: "⑥ The Master Contract (signposts)", box: [470, 1060, 941, 1295], key: [38, 39] },
    ],
  },
  {
    id: 3, title: "Israel's Favours and First Failures", range: [40, 66], img: "images/part3.webp", w: 941, h: 1672,
    spots: [
      { label: "① Remember the Favour", box: [18, 178, 392, 345], key: [40, 41, 42, 43, 44], more: [45, 46, 47, 48], note: "A two-way covenant: 'Fulfil My covenant and I will fulfil yours.'" },
      { label: "① Remember the Favour (scene)", box: [392, 150, 941, 370], key: [40, 41, 42, 43, 44], more: [45, 46, 47, 48] },
      { label: "② Rescued", box: [18, 378, 348, 525], key: [49, 50], note: "The same sea that saved them drowned their enemy." },
      { label: "② Rescued (scene)", box: [348, 370, 941, 590], key: [49, 50] },
      { label: "③ The Wrong Cow", box: [18, 565, 350, 725], key: [51], more: [52, 53, 54, 55, 56], note: "Cow #1 in the surah: a golden calf worshipped. Keep it in mind for cow #2." },
      { label: "③ The Wrong Cow (scene)", box: [230, 690, 570, 835], key: [51], more: [52, 53, 54, 55, 56] },
      { label: "④ Gifts Rejected", box: [578, 582, 918, 708], key: [57, 61], note: "Heavenly food delivered daily — and they asked for onions." },
      { label: "④ Gifts Rejected (scene)", box: [560, 710, 941, 935], key: [57, 61] },
      { label: "⑤ Words Altered", box: [18, 830, 348, 960], key: [58, 59], note: "Told to say 'Hittah' (relieve us) — they swapped the word." },
      { label: "⑤ Words Altered (scene)", box: [0, 960, 510, 1140], key: [58, 59] },
      { label: "⑥ Twelve Springs", box: [540, 932, 918, 1058], key: [60], note: "One rock, twelve springs, one per tribe — no reason to quarrel." },
      { label: "⑥ Twelve Springs (scene)", box: [560, 1058, 941, 1262], key: [60] },
      { label: "⑦ The Book Held Weakly", box: [18, 1140, 350, 1282], key: [61, 63, 64], more: [62, 65, 66], note: "'Take what We gave you with strength' — a book held loosely slips away." },
      { label: "⑦ The Book Held Weakly (scene)", box: [0, 1282, 560, 1410], key: [61, 63, 64], more: [62, 65, 66] },
    ],
  },
  {
    id: 4, title: "The Cow: Questions That Tighten the Rope", range: [67, 74], img: "images/part4.webp", w: 940, h: 1672,
    spots: [
      { label: "① A Simple Command", box: [18, 180, 335, 345], key: [67], note: "Any cow would have done. Simple command, simple obedience." },
      { label: "① A Simple Command (scene)", box: [0, 345, 430, 610], key: [67] },
      { label: "Why the surah bears her name", box: [695, 178, 920, 305], key: [67, 68, 69, 70, 71], note: "The cow exposes a disease: turning a clear command into endless questions." },
      { label: "② Question One", box: [512, 312, 798, 418], key: [68], note: "Each question added a condition — like tightening a rope around yourself." },
      { label: "② Question One (scene)", box: [545, 418, 940, 655], key: [68] },
      { label: "③ Question Two", box: [18, 612, 290, 695], key: [69] },
      { label: "③ Question Two (scene)", box: [220, 650, 505, 890], key: [69] },
      { label: "④ Question Three", box: [515, 622, 790, 745], key: [70, 71] },
      { label: "④ Question Three (scene)", box: [520, 745, 940, 900], key: [70, 71] },
      { label: "⑤ Almost Not", box: [25, 898, 302, 1015], key: [71], note: "'They slaughtered her, and they almost did not.'" },
      { label: "⑤ Almost Not (scene)", box: [0, 1015, 470, 1205], key: [71] },
      { label: "⑥ Life Returns", box: [455, 902, 755, 1030], key: [72, 73], note: "A dead man speaks: a preview of how Allah raises the dead." },
      { label: "⑥ Life Returns (scene)", box: [470, 1030, 940, 1212], key: [72, 73] },
      { label: "⑦ Harder Than Stone", box: [478, 1222, 830, 1342], key: [74], note: "Even rocks split for water — but some hearts never do." },
      { label: "⑦ Harder Than Stone (scene)", box: [555, 1342, 940, 1535], key: [74] },
    ],
  },
];
