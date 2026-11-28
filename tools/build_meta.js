// Builds meta.js: which hotspots are summary text (essence, nazm, amūd, takeaway, topic flow, titles,
// stats…) rather than pictures of verses. Those panels show their explanation, not the verses.
// Usage: node tools/build_meta.js [-v]   (run from the repository root; -v lists the decisions)
global.window = {}; const fs = require('fs');
for (const f of fs.readdirSync('.').filter(f => /^parts.*\.js$/.test(f))) require(process.cwd() + '/' + f);
const PS = Object.assign({}, window.PARTS_BY_SURAH); if (window.PARTS) PS[2] = { parts: window.PARTS }; if (window.PARTS_3) PS[3] = { parts: window.PARTS_3 };

// Words that mark a summary / study-aid panel. Matched as whole words.
const META = new RegExp([
  'essence', 'nazm', 'naẓm', 'micro[- ]?(nazm|level)', 'macro[- ]?(nazm|level)', '^micro', '^macro', 'amud', 'amūd', 'ʿamūd', "'amud",
  'takeaways?', 'hook', 'topic', 'progression', 'topic flow', 'one-line flow', 'story flow', 'verse flow', '\\d-act flow', 'part \\d flow', 'flow of ideas', 'flow:', '^flow$', 'overview', 'zoom(ed|ing)? out', 'zoom out', 'place in (the )?qur.?an',
  'bigger picture', 'big picture', 'why (this surah|it) matters', 'why it matters', 'life lessons?', 'key lessons?', 'lessons? from',
  'cheat sheet', 'crash course', 'at a glance', 'toolkit', 'memory anchors?', 'key memory anchors', 'anchor mnemonic', 'mnemonics?',
  'distillation', 'lock-in', 'central (pillar|axis|idea)', 'deep(est)? idea', 'tidbit', 'insight', 'recap', 'one[- ]line', 'in one breath',
  'one-sentence', 'reflection', 'big themes', 'themes?', 'structure', 'coherence', 'architecture', 'internal (weave|design|threads)',
  'pairing', '^paired with', 'nazm.*paired with', 'sister surahs', 'group (five|5|iii|3)', 'cluster', 'context', 'seam', 'surah neighbourhood', 'surah placement',
  'ring structure', 'inclusio', 'chiasm', 'why the name', 'why no bismillah', 'name image', 'meaning of name', 'key words? to know', 'key word',
  'key idea', 'surah overview', 'revelation:', 'verses:', 'words:', 'letters:', "ruku'?", 'juz', 'meccan', 'makki', 'core image',
  'memory story map', 'memory story', 'how the surah (flows|progresses|continues)', 'final takeaway', 'master takeaway', 'footer reflection',
  'one-line (recall|memory path|flow|compression)', 'five acts', 'wires', 'load-bearing beams', 'the spine',
  'anchor \\d', 'anchor icons', 'face map', '^pin:', 'recall', 'how to remember', '^remember(:| the (six|promise)| these)', 'intro:',
  'why the surah bears', 'why be proud', 'the name:', 'name / core idea', 'what the name tells', 'final lesson', 'three lessons', 'lessons of the guide',
  'apply the lessons', 'reflect on the stories', 'the whole surah in', 'how the surah has progressed', 'key emotional pivot', 'connection:',
  'table: letter', 'three-part painting', 'quiet reflection', 'final reflection', 'hidden layer',
].map(w => `(?:^|[^\\p{L}])${w}(?![\\p{L}])`).join('|'), 'iu');
const TITLE = /^(title\b|surah overview|memory story\b)/i;
// rows of a topic-progression strip: an index, then a verse range ("3 18–22 ʿAd")
const FLOW_ROW = /^\d+\)?\s+\d+\s*[–-]\s*\d+\s/;
const SCENE = /\((scene|signposts|sky|garden)\)$/i;
// numbered story cards and verse cards are never summary sub-items
const STORY = /^(\d+[).]?\s|[①-⑳]|card \d|scene \d|split \d|act \d|step \d|movement \d|verse \d|verses \d|v\.? ?\d)/i;
// Labels that the words above catch but that picture verses (story cards), and summary labels they miss.
const NOT_META = [/^9:\d+(\u2013\d+)? \u2014 /, /^\d+\)? .*\b(ring|frame|context)\b/i, /^Thamud\b./i, /Thamud (and|shows|as)\b/i, /^Title deed/i, /^Act \d/i, /^[ⒶⒷ]/, /^11 Final lesson/, /^(Qarun|Pharaoh|Haman) =/, /^20\. Return to the Roman/];
// a sub-item that names its own verse range ("M — Messengers gallop (1–7)") still shows those verses
// …and so does a numbered topic row that ends with its one verse ("3 The thesis verse (7)")
const RANGE_END = /\(\d+\s*[–-]\s*\d+\)$|^\d+ .*\(\d+\)$/;
// Summary panels the word rules miss, by poster ('2-*' = every poster of surah 2). An entry is the start of a
// label; a single word must match the whole label.
const ADD = {
 "2-*": [
  "Opening test",
  "The surah's measuring line",
  "The pattern",
  "Why the surah bears her name",
  "Broken trust",
  "The hinge of the surah",
  "The handover",
  "The job description",
  "Law with a heart",
  "Character is action",
  "The home is a covenant",
  "The true army is filtered",
  "Connection: why this comes before money",
  "The money mirror",
  "Faith enters the contract",
  "The whole surah in two answers"
 ],
 "3-1": [
  "The name, unlocked",
  "The race outlives every runner",
  "One house · one din",
  "Hold the one din",
  "Cling to the muhkam",
  "Avoid the fitnah of the heart",
  "Trust the Architect",
  "Be helpers of Allah",
  "Pass it on",
  "Grip it with unbreakable patience"
 ],
 "3-2": [
  "One rope."
 ],
 "5-*": [
  "Part ",
  "A full table. A binding promise.",
  "The opening promise:",
  "Before the first bite, prepare",
  "The faithful response:",
  "The same table. The same covenant.",
  "The warning in the empty cord",
  "They refused to rise — then had to wander",
  "The cost of refusal:",
  "From the first murder to the fence",
  "The walls that protect the table",
  "Three revealed books. One duty",
  "The governing law:",
  "Protective loyalty is part of keeping",
  "The loyalty clause:",
  "Complete delivery. Clear belief.",
  "The final notice:",
  "Humble hearts recognize truth",
  "Gratitude without excess:",
  "The hand can reach — but faith",
  "The test of the reaching hand:",
  "Do not invent burdens; do not betray",
  "The last words are a knot",
  "The greatest gift comes with",
  "The table is complete:"
 ],
 "8-1": [
  "Zooming all the way out"
 ],
 "10-1": [
  "One surah, one journey, one question"
 ],
 "11-1": [
  "Mocking nations destroyed"
 ],
 "12-1": [
  "What looks like burial",
  "Chain reaction:",
  "Read it. Reflect on it."
 ],
 "15-1": ["Numerical anchors", "Bottom line:"],
 "19-1": ["From whisper, to sanctuary", "Arc: mercy given"],
 "20-1": ["Numerical anchors", "Compressed one-liners"],
 "21-1": ["One message. Many messengers."],
 "21-2": ["One message. Many messengers.", "The gallery's secret rhythm"],
 "22-1": ["The six movements", "The nine memory stations", "Why the surah is named"],
 "71-1": ["Core surah idea"],
 "72-1": ["What we learn"],
 "73-1": ["Forged in the night"],
 "75-1": ["Chapter 75"],
 "76-1": ["The Human (emblem)", "Key facts"],
 "7-18": ["The climb began"],
 "7-19": ["The hook", "Warned by your nature", "Al-A'raf: the heights", "Amud:", "1 Adam", "2 The Heights", "3 Five towns", "4 Israel", "5 The covenant", "The completed proof"],
 "7-20": ["Like a court case", "The warning becomes"],
 "7-21": ["The small connections"],
 "7-22": ["The big connections", "1 Islahi", "2 Argument", "3 The backward", "4 The forward", "5 The promise", "6 Connections", "7 The first"],
 "7-9": ["Title: Surah Al-A'raf"],
 "33-1": ["The central contrast"],
 "33-2": ["The deepest meaning"],
 "29-2": ["The surah shift", "Key contrast"],
 "26-2": ["B) The deepest lesson", "5) Why Moses first"],
 "23-1": ["Why is it called", "What this surah demands"],
 "24-1": ["What this surah builds", "Even more simply", "The central question", "A luminous society is built"],
 "58-1": ["Allah hears every word"],
 "59-1": ["A) How the topics connect", "E) Core message"],
 "60-1": ["One sentence to keep"],
 "61-1": ["2 Flow of the surah", "The whole universe is already"],
 "62-1": ["6 Zoomed all the way out"],
 "63-1": ["A nafaq — burrow", "Hidden rear door"],
 "64-1": ["Contract offer"],
 "65-1": ["2 The shape"],
 "22-2": ["1 The surah of hearts", "2 Three levels of prostration", "3 Two declarations", "4 Knowledge versus argument", "5 Outer sacred signs", "6 Allah's help forms a chain", "7 The earthquake and the fly", "The four-letter 'HAJJ'", "The deepest message", "'Gather before Allah"],
 "16-1": [
  "An-Nahl — the bee (centre)",
  "Why the bee?",
  "Sunset",
  "Surah An-Nahl is an invitation",
  "Surah An-Nahl, Chapter 16"
 ],
 "16-2": [
  "Nahla's last lesson",
  "From defended revelation to grateful submission"
 ],
 "17-2": [
  "From Subhan at the opening to Takbir at the end"
 ],
 "18-1": [
  "'Whoever holds onto the opening verses",
  "This is not just about one monster",
  "Faith · good deeds · knowledge · patience",
  "Hold tight to God. Prefer what lasts",
  "The armor of Al-Kahf",
  "Read it every Jumu'ah",
  "Let it protect your heart"
 ],
 "34-2": [
  "The God who knows every atom will settle",
  "Two histories in the middle",
  "The loop closes:"
 ],
 "35-*": [
  "Part 1 — from creation",
  "Part 2 — from human need",
  "Part 3 — from the gardens",
  "Continued in part 2",
  "The Originator made you"
 ],
 "37-1": [
  "Part 1 — scenes 1–6 only"
 ],
 "37-2": [
  "Recurring prophetic formula"
 ],
 "38-1": [
  "Truth is rejected not for lack of proof",
  "End of part 1"
 ],
 "38-2": [
  "Two postures, one arch",
  "Bowing (ināba) vs arguing"
 ],
 "39-2": [
  "Nothing new is decided at the gates"
 ],
 "40-1": [
  "Will you seek Allah's covering",
  "The believer speaks six times"
 ],
 "40-2": [
  "Every day you stand at this intersection"
 ],
 "41-1": [
  "Part 2 begins:"
 ],
 "41-2": [
  "The witness was never his skin",
  "Signs outside. Signs inside."
 ],
 "43-2": [
  "The assay is delivered"
 ],
 "44-1": [
  "Smoke is not the fire"
 ],
 "47-2": [
  "The flag is not replaceable",
  "The enemy is judged • the community"
 ],
 "48-1": [
  "Unarmed pilgrims stopped",
  "Some of life's greatest openings",
  "Part 1 ends at verse 17"
 ],
 "48-2": [
  "From the shut gate to God's reading",
  "Part 2: verses 18–29"
 ],
 "49-1": [
  "Shout at the door → six rooms"
 ],
 "50-1": [
  "The Lord is near. He knows."
 ],
 "51-1": [
  "Every wind, cloud, ship and angel"
 ],
 "53-1": [
  "A real star descended"
 ],
 "55-1": [
  "Every blessing is a free gift",
  "Famous refrain repeated 31"
 ],
 "77-1": [
  "All three agree on one truth",
  "Decide now!",
  "Contents of the package"
 ],
 "78-1": [
  "Opening of the final group",
  "Earth frame",
  "Sound & rhythm",
  "'Day' as a rivet",
  "Front gate of the finale",
  "Two surahs, one argument",
  "Connected to before",
  "One continuous conversation",
  "News",
  "Proof",
  "Horn",
  "Two rooms",
  "Near",
  "Twin destinations",
  "Same earth, two endings"
 ],
 "79-1": [
  "The name = master key",
  "Your daily choices decide",
  "Like a courtroom",
  "Surah 78 An-Naba'",
  "Surah 79 An-Nāzi'āt",
  "Headline → supporting proof"
 ],
 "80-1": [
  "Surah 79 ",
  "Surah 80 ",
  "Surah 81 ",
  "Every meal is a reminder",
  "Face → eye"
 ],
 "81-1": [
  "Chant:",
  "Everything gets folded up."
 ],
 "82-1": [
  "Sky splits → self-deception splits",
  "Secret record splits → society splits",
  "Society splits → solidarity splits",
  "Surah 81 ",
  "Surah 82 ",
  "Surah 83 "
 ],
 "85-1": [
  "Power without helplessness",
  "The crime, the promise, the believers' honor",
  "How the surah moves",
  "Look up at Al-Buruj"
 ],
 "85-2": [
  "Truth is maḥfūẓ",
  "The stars are not decoration",
  "The story in three lines",
  "The universe is a courtroom"
 ],
 "86-1": [
  "You were never alone"
 ],
 "87-1": [
  "Al-A'la is the bridge",
  "AL-A'LA — The Most High"
 ],
 "88-1": [
  "Ghāshiyah = ",
  "Mirror pairs:",
  "Quranic connection",
  "Surah 87 ",
  "Surah 88 ",
  "Memory hooks"
 ],
 "89-1": [
  "From witnesses → to warning",
  "Visual memory keys",
  "Dawn arrives",
  "Mirsad watches",
  "Tests reveal",
  "Judgment comes",
  "Soul returns",
  "Quick facts"
 ],
 "90-1": [
  "The climb's Arabic tags",
  "Final anchor",
  "The real climb = compassion",
  "Eyes. Tongue. Lips. Two roads.",
  "Showy spending. False pride."
 ],
 "91-1": [
  "The '-aha' rhyme",
  "Every day the soul is either polished",
  "Remember the surah as one scene",
  "Cosmic light",
  "Inner sun",
  "Two hands",
  "Thamud",
  "Flattened city"
 ],
 "92-1": [
  "Two hands: open hand",
  "Coin at the crossroad",
  "Sun–night–morning triangle",
  "Sun → night → morning"
 ],
 "93-1": [
  "Mercy received becomes mercy given",
  "Your brightest morning is still ahead",
  "Memory chain",
  "Orphan → shelter",
  "Wandering → guidance",
  "Poor → enrichment",
  "Morning always comes"
 ],
 "94-1": [
  "Three gifts"
 ],
 "95-1": [
  "Four oaths • four witnesses",
  "After all these signs, no honest excuse",
  "Witnessed by creation, sealed by revelation"
 ],
 "96-1": [
  "A The 4-act skeleton",
  "B The two caves",
  "Same origin. Two destinies.",
  "Origin",
  "Forgetfulness",
  "Revelation",
  "Oppression",
  "Judgment",
  "Nearness",
  "Two caves: one remembers",
  "Contrast strip",
  "Clot vs arrogance",
  "Pen vs forelock",
  "Self-sufficiency vs prostration",
  "Gang vs angels"
 ],
 "97-1": [
  "All three meanings meet",
  "Al-Qadr is the timestamp",
  "The math of heaven",
  "Every odd night of the last ten"
 ],
 "98-1": [
  "The proof people claimed they were waiting for"
 ],
 "99-1": [
  "Evidence → testimony → exposure",
  "Floor-camera test",
  "Atom shows up"
 ],
 "100-1": [
  "The loyalty of a horse exposes",
  "Two masters:",
  "Cracked earth = kanood",
  "Mirror trick:",
  "If a horse can give everything"
 ],
 "101-1": [
  "Big becomes small",
  "Hard becomes soft",
  "Mother becomes pit"
 ],
 "102-1": [
  "Eight verses. One mirror.",
  "Opens with 'alhakum'",
  "Closes with 'na'im'",
  "Farahi–Islahi view",
  "For what were you created?"
 ],
 "103-1": [
  "Expanding order:",
  "Three verses. One press.",
  "B) Inner order of verse 3",
  "Believe deeply • do righteously"
 ],
 "104-1": [
  "The formula: 3 sins"
 ],
 "107-1": [
  "The biggest theology is tested",
  "Protection → worship"
 ],
 "108-1": [
  "Quran — guidance for all time",
  "Family tree from Fatima",
  "Ummah — a global nation",
  "Pond in Paradise",
  "Wisdom",
  "Mercy",
  "Victory",
  "Eternity"
 ],
 "109-1": [
  "You can live in peace with people",
  "Four rejections seal every direction",
  "'Coexistence without compromise",
  "Verses 2–3 present action",
  "Al-Kafirun = outer wall",
  "Both begin with Qul"
 ],
 "110-1": [
  "When you win, bow lower",
  "Outside event → crowd response",
  "'Nasrullah' attributes",
  "'Ra'ayta' keeps",
  "The commands are worship",
  "'Tawwab' reminds",
  "The peak is the most dangerous",
  "Three verses. A victory parade"
 ],
 "111-1": [
  "Al-Masad stands between victory"
 ],
 "112-1": [
  "Ikhlas = purification",
  "He is uniquely One, the Refuge",
  "The Ahad ring",
  "Two affirmations, then two negations",
  "Verse 1 and verse 4 both end with Ahad",
  "Samad sits at the center"
 ],
 "113-1": [
  "Why 'Falaq' matters",
  "One night. Four shadows."
 ],
 "114-1": [
  "Nas = mankind",
  "Sudur = the chest",
  "Waswasah = the soft whisper",
  "Al-Khannas = the slinker",
  "Forget Allah → whisper attacks",
  "Three keys to lock the inside door",
  "One forgetful human.",
  "Ascending shield / descending threat",
  "Khannas is a unique word",
  "Why it closes the Quran",
  "Read it. Feel it. Live it."
 ]
};

// A summary panel's own sub-items (boxes lying inside it) are summary text too — except inside the big
// "memory story" / "topic progression" frames, whose rows picture or name specific verses.
const NOT_PARENT = /memory story|topic (flow|progression|map)|progression|flow|^title|story map|five stations|at a glance|^one message\. many messengers/i;
const inside = (a, b) => { const w = Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0])), h = Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));
  return w * h >= 0.75 * (a[2] - a[0]) * (a[3] - a[1]) && (b[2] - b[0]) * (b[3] - b[1]) > (a[2] - a[0]) * (a[3] - a[1]) * 1.2; };
const out = {}; let n = 0, total = 0; const v = process.argv.includes('-v');
for (const s in PS) for (const p of PS[s].parts) {
  const extra = [...(ADD[`${s}-${p.id}`] || []), ...(ADD[`${s}-*`] || [])];
  const listed = l => extra.some(e => /\s|[.:=—→·]/.test(e) ? l.startsWith(e) : l === e);
  const isMeta = sp => { const l = sp.label; return !SCENE.test(l) && (listed(l) || ((TITLE.test(l) || META.test(l)) && !NOT_META.some(r => r.test(l)))); };
  const direct = p.spots.map(isMeta);
  const parents = p.spots.filter((sp, i) => direct[i] && !NOT_PARENT.test(sp.label));
  // items listed right after a summary heading, in the same column and running on below it, belong to that panel
  const follows = []; let H = null, lastB = 0;
  p.spots.forEach((sp, i) => {
    const l = sp.label, [x1, y1, x2, y2] = sp.box, cx = (x1 + x2) / 2;
    if (direct[i]) { H = NOT_PARENT.test(l) ? null : sp; lastB = sp.box[3]; return; }
    if (H && !SCENE.test(l) && !NOT_META.some(r => r.test(l)) && !STORY.test(l) && cx >= H.box[0] - 20 && cx <= H.box[2] + 20 && y1 >= H.box[1] - 10 && y1 - lastB <= 0.12 * p.h) { follows[i] = H; lastB = Math.max(lastB, y2); }
    else H = null;
  });
  const list = [];
  p.spots.forEach((sp, i) => { total++;
    const l = sp.label, child = !direct[i] && !SCENE.test(l) && !NOT_META.some(r => r.test(l)) && !RANGE_END.test(l) && (parents.find(q => q !== sp && inside(sp.box, q.box)) || follows[i]);
    const meta = direct[i] || !!child;
    if (meta) { list.push(l); n++; }
    if (v) console.log((direct[i] ? 'META ' : child ? 'CHLD ' : '     ') + `${s}-${p.id}`.padEnd(7) + l + (child ? '   ⊂ ' + child.label : ''));
  });
  if (list.length) out[`${s}-${p.id}`] = list;
}
fs.writeFileSync('meta.js', '// Generated by tools/build_meta.js — hotspots that are summary text (essence, nazm, amūd, takeaway, titles…),\n// so their popup shows the explanation and links to the verses it mentions, not the verses themselves.\nwindow.META_PANELS = ' + JSON.stringify(out) + ';\n');
if (!v) console.log('summary panels', n, 'of', total);
