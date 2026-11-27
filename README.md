# Qur'an Memory Stories

An interactive study page for illustrated "Memory Story" posters of the Qur'an. Each surah is drawn as a story;
point at any part of a poster and the exact verses appear in Arabic, English and Urdu, with every Arabic word
explained down to its root.

**In numbers:** 111 surahs · 242 posters · 6,066 verse hotspots · 6,144 verses · about 76,000 words explained · 1,644 roots.

**Surahs included:** 2–32, 34–65 and 67–114 (66 is still to come).

## How to study with it

| Step | What to do |
|---|---|
| **Pick a surah** | The home screen is a library of every surah, with search. Type a name, a verse such as `4:11`, an English word such as `patience`, or Arabic text. Clicking a verse opens the poster panel that shows it. |
| **Read the picture** | Hover (or tap) any panel to see its verses. Click to pin the popup. Gold tags mark verses the panel shows; blue-grey tags mark neighbouring or recalled verses. Summary panels (titles, essence, nazm, amūd, takeaways, lessons, memory aids) show their explanation instead, with the verses they mention one tap away. |
| **Verse cards** | Each verse appears as a quran.com-style card: play the Arabic recitation (Mishary Alafasy), listen to the English translation, bookmark it, copy, share, add your own note, or open the tafsir. |
| **Choose the English** | ⚙ Settings → English: **The Clear Quran** (Dr. Mustafa Khattab, the default when `clearquran.js` is present) or **Saheeh International**. The choice applies to every verse card, the verse list, search, copy and share. |
| **Listen in English** | The 🔊 EN button reads the translation with sentence-by-sentence highlighting. With The Clear Quran your device's best natural voice reads it. With Saheeh International it plays Ibrahim Walk's recorded reading, falling back to the device voice if the recording can't load. The ☰ Verses list has the same ▶ Arabic and 🔊 EN buttons on every verse, with each verse's full English shown, and a **1× / 1.25× / 1.5×** speed choice above the list (also in ⚙ Settings, together with the device voice). |
| **Go word by word** | Click (tap) any Arabic word — in a popup, in the ☰ Verses list or in your vocabulary — to open its card; click the word again, its copy at the top of the card, ×, or Esc to close it. The card shows the word with its transliteration and meaning, then: **Root** — the letters and the root's core idea; **Base form** (dictionary form); **Grammar** — a head word plus short tags (Form I–X, tense, person, case, definite or indefinite, prefixes, attached pronouns); **Grammar bite** — one sentence on what the word does in its sentence (e.g. the "extra" bāʾ after mā / laysa, lam + jussive, the subject of inna, a possessive iḍāfah), linking to other verses of the surah with the same pattern; **Why this word** — a verse-specific note where one has been written (68 so far, in `tools/why_src.js`), otherwise what the word's form signals. Press **Space** to add the open word to your vocabulary (again to remove it). The card always fits on screen without scrolling. |
| **Build your vocabulary** | On a word's card press **☆ Add to vocabulary**. The **Vocabulary** tab in the ☰ drawer lists the words you saved for that surah, with meaning, base form and root, in verse order or newest first. **Test me** blurs the meanings until you tap each word; the verse number takes you to the panel. |
| **Highlight words** | The card's colour dots (yellow, green, pink, blue) highlight that word wherever its verse appears; ✕ removes it. Saved words get a gold underline. Vocabulary and highlights are saved in your browser. |
| **Take the tour** | **▶ Tour** (or the `T` key) walks through a poster panel by panel, spotlighting each one. Use `←` `→` to move. |
| **Test yourself** | Switch on **Self-test** during a tour: the verses stay hidden until you ask for them, and you mark each panel "Knew it" or "Again later". |
| **Track progress** | Finishing a tour marks the poster as studied (or use the **✓** button). The home screen shows your progress and a "Continue" button. Progress is saved in your browser only. |
| **Check the facts** | **🔎 Fact-check** lists, for each poster: corrections where the poster differs from the Qur'an's text, word patterns verified across all 114 surahs, and story details that are the poster's own imagery. |

Other controls:

- **Zoom:** the − / Fit / + buttons, the `+` `−` `0` keys, Ctrl/⌘ + scroll, or a two-finger pinch. Drag to move around when zoomed in.
- **☰ Verses:** every verse of the poster in order; click a verse to light up where it appears, or click any Arabic word in it for its word card.
- **⚙ Settings:** English, Urdu or both; transliteration; hotspot outlines; Arabic text size.
- **Links:** `#home` is the library. `#s36` opens Ya-Sin; `#s4-3` opens An-Nisa' poster 3. Al-Baqarah uses `#part5` and Aal Imran `#aal-imran-2`.

## Accuracy

The posters are memory aids made by others, and some contain slips. This project treats the Qur'an's text as the
reference:

- Every hotspot was matched to its verses from the panel's wording, then checked visually against the poster.
- Claims such as "this phrase occurs only in verses X and Y" were searched for across the whole Qur'an before being
  repeated. They are marked "Checked:" in the popups.
- Where a poster's wording, numbering or picture differs from the text, the popup shows the verse itself and says
  what differs. Fact-check collects these per poster (44 corrections so far, besides 217 verified patterns).
- Hadith and tafsir details are labelled with their source, and weak reports are called weak.
- Automated audits (`tools/build_factcheck.js` and the checks used during development) confirm that every verse
  number a hotspot uses exists, every box lies inside its image, every `surah:verse` reference in a note is valid,
  and every verse has word-by-word data that lines up with its Arabic text.

If you find a mistake, the hotspot data is plain text and easy to correct (see "Editing" below).

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: plain HTML, CSS and JavaScript, no build step |
| `parts*.js` | Hotspot maps: for each poster, a box per panel and the verses it shows, with notes |
| `verses*.js` | Verse text: Arabic (Uthmani), English, Urdu, transliteration |
| `clearquran.js` | The Clear Quran, verse by verse — **not in this repository** (see Sources). Build your own with `tools/build_clearquran.py` |
| `words.js` | Word-by-word data for every verse: meaning, root, base form and grammar tags (built by `tools/build_words.py`) |
| `roots_core.js` | One-line "original meaning" for each of the 1,448 roots, plus per-word notes and spelling alignments |
| `why.js` | Curated "Why this word?" notes (built from `tools/why_src.js` by `tools/build_why.js`) |
| `meta.js` | Which hotspots are summary panels rather than verse pictures (built by `tools/build_meta.js`: word rules, position inside a summary panel, and an explicit per-poster list) |
| `factcheck.js` | Per-poster corrections, verified patterns and imagery notes (built by `tools/build_factcheck.js` from the hotspot notes) |
| `images/` | The posters (`.webp`); `images/thumbs/` holds the small library thumbnails |
| `fonts/UthmanicHafs1Ver18.woff2` | KFGQPC Uthmanic Script Hafs (King Fahd Complex), the Qur'an font quran.com uses; it matches the Uthmani text exactly |

`parts.js` / `verses.js` hold Al-Baqarah and `parts3.js` / `verses3.js` Aal Imran; the other files are named by
surah number, for example `parts34-35.js`.

## Editing

Each hotspot is

```js
{ label, box: [x1, y1, x2, y2], key: [verses shown], more: [neighbouring or recalled verses], note }
```

with the box in the image's own pixels. Tick **Show hotspot outlines** in Settings to check that boxes line up.
After changing notes or labels, run `node tools/build_factcheck.js` and `node tools/build_meta.js` to refresh the Fact-check lists and the summary-panel list.

To add a surah: add its `verses*.js` and `parts*.js` (and two `<script>` tags in `index.html`), then rebuild
`words.js` with `tools/build_words.py` for the full list of surahs.

## Running it

Open `index.html` through any static web server, for example:

```bash
python3 -m http.server 8000
```

To publish with GitHub Pages: in the repository's **Settings → Pages**, choose **Deploy from a branch**, branch
`main`, folder `/ (root)`.

## Sources

- **Arabic:** Uthmani text from QuranEnc, shown in the King Fahd Complex's Uthmanic Hafs font (from quran.com's open-source
  front end), so it renders exactly as in the printed Madinah Mushaf and on quran.com.
- **English (default):** *The Clear Quran: A Thematic English Translation* by Dr. Mustafa Khattab (© 2015, all rights
  reserved; [theclearquran.com](https://theclearquran.com)). Because it is copyrighted, its text is **not** in this public
  repository: `clearquran.js` is in `.gitignore`. To use it, run `python3 tools/build_clearquran.py "The_Clear_Quran.pdf"`
  on your own copy of the e-book (it checks every surah's verse count). Without the file the page uses Saheeh International.
- **English (alternative):** Saheeh International. **Urdu:** Abul Aʿla Maududi (Tafhim-ul-Quran). **Transliteration:** Tanzil.
  All from [quran-json](https://github.com/risan/quran-json) v3.1.2.
- **Word meanings:** quran.com word-by-word data. **Roots, base forms (lemmas) and grammar tags:** the Quranic Arabic Corpus.
  **Lexicon summaries:** Quran-Journey/roots, after classical lexicons such as Lane's.
