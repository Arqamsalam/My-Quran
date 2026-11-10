# Quran · Memory Story Dashboard

An interactive page for the illustrated "Memory Story" posters of **Al-Baqarah (2)**, **Aal Imran (3)**, **An-Nisa' (4)**, **Al-Ma'idah (5)**, **Al-Anfal (8)**, **An-Nahl (16)**, **Al-Isra (17)**, **Al-Kahf (18)**, **Ash-Shura (42)**, **Az-Zukhruf (43)**, **Ad-Dukhan (44)** and **Al-Mursalat (77) to An-Nas (114)**. Pick a surah from the dropdown in the top bar.
The whole poster always fits the screen — no scrolling. **Hover over (or tap) any panel** to get a popup with the **original Arabic verse(s)**,
plus English (Saheeh International) and/or Urdu translation and an optional transliteration.

- **Click** a panel to pin its popup so you can scroll it; hovering another panel moves on. Esc or × closes it.
- **☰ Verses:** slide-out list of every verse in the part; click one to light up where it appears in the poster.
- **⚙ Settings:** English / Urdu / both, transliteration, hotspot outlines, Arabic text size.
- **← →** keys (or the side arrows) change part.
- Gold tag = the panel cites or shows that verse. Blue-grey = a neighbouring verse, or one a lesson box recalls.

## Files
| File | What it is |
|---|---|
| `index.html` | The dashboard (plain HTML/CSS/JS, no build step) |
| `parts.js` | The hotspot map: a box per panel/scene + which verses it shows |
| `verses.js` | All 286 verses of Al-Baqarah: Arabic (Uthmani), English, Urdu, transliteration |
| `parts3.js`, `verses3.js` | The same for Aal Imran (3:1–200) |
| `parts78-82.js`, `verses78-82.js` | Surahs 78–82 (one poster each) |
| `parts77-85.js`, `verses77-85.js` | Surahs 77, 83, 84 and 85 (Al-Buruj has two posters) |
| `parts86-90.js`, `verses86-90.js` | Surahs 86–90 (one poster each) |
| `parts91-95.js`, `verses91-95.js` | Surahs 91–95 (one poster each) |
| `parts42.js`, `verses42.js` | Ash-Shura (42), two posters |
| `parts4.js`, `verses4.js` | An-Nisa' (4), all 14 posters |
| `parts5.js`, `verses5.js` | Al-Ma'idah (5), posters 1–10 of 12 (verses 1–100) |
| `parts8.js`, `verses8.js` | Al-Anfal (8), one poster |
| `parts16-18.js`, `verses16-18.js` | An-Nahl and Al-Isra (two posters each), Al-Kahf (one) |
| `parts43-44.js`, `verses43-44.js` | Az-Zukhruf and Ad-Dukhan (two posters each) |
| `parts96-100.js`, `verses96-100.js` | Surahs 96–100 (one poster each) |
| `parts101-105.js`, `verses101-105.js` | Surahs 101–105 (one poster each) |
| `parts106-110.js`, `verses106-110.js` | Surahs 106–110 (one poster each) |
| `parts111-114.js`, `verses111-114.js` | Surahs 111–114 (one poster each) |
| `images/partN.webp`, `images/s3-partN.webp`, `images/sNN.webp` | The posters |

## Publish on GitHub Pages
1. Create a new repository on GitHub (e.g. `baqarah-dashboard`).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/baqarah-dashboard.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**, set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/baqarah-dashboard/`.

## Coverage
- **Al-Baqarah:** all 16 posters (248 hotspots, including each poster's lesson box). Verses 202–203 and 252–254 fall between posters; they are listed at
  the end of the preceding part, marked "between posters".
- **Aal Imran:** both posters (93 hotspots). Poster 1 prints no verse numbers, so its verses were identified from each
  panel's wording; the page says so on that part.
- **Surahs 78–82:** one poster per surah, mapped densely (288 hotspots) — every small icon, list row and story panel
  has its own verse. Panels that point to a neighbouring surah (e.g. "paired with An-Nazi'at") also show that verse.
- **Surahs 77, 83, 84, 85:** 286 more hotspots; every verse of each surah is reachable from its poster. A few items on the
  Al-Mursalat poster (records in the right/left hand, scorching wind, boiling water, pus, the zaqqum tree…) don't occur in
  Surah 77 — their popups say so and point to where they do occur.
- **Surahs 86–90:** 277 more hotspots; every verse is reachable. Poster slips are noted on the page (At-Tariq card 7
  prints "vv. 18–17"; Al-Balad has a misspelt الشفنين label; Al-Fajr's "Pharaoh … drowned" is not in that surah).
- **Surahs 91–95:** 222 more hotspots; every verse is reachable. Poster slips noted on the page: Al-Layl's
  "Words: 104 / Letters: 429" (the surah has 71 words); Ash-Sharh's "Thank your Lord" (verse 8 says "direct your
  longing") and garbled Arabic beside the summit.
- **Ash-Shura (42):** two posters, 126 hotspots; every verse is shown. Part 1 prints no verse numbers, so its cards were
  matched by wording. The poster's word-threads (baghy 14/27/39/42, wali 6/8/9/28/31/44/46, pardon 30/34/37/40/43) were
  all checked against the Arabic.
- **Surahs 96–100:** 251 more hotspots; every verse is shown. Poster slip noted on the page: Al-Bayyinah labels
  "We follow only what we found our fathers doing" as 98:5, but that line is not in the surah (cf. 2:170).
- **Surahs 101–105:** 181 more hotspots; every verse is shown. Noted on the page: At-Takathur's "truth of certainty"
  (ḥaqq al-yaqīn) is not in that surah (it has 'ilm and 'ayn al-yaqīn, 5 and 7); Al-Fil's story details are from the sirah.
- **Surahs 106–110:** 191 more hotspots; every verse is shown. Noted on the page: Al-Kawthar's "17 Arabic words"
  (the surah has 10).
- **Word-by-word (every surah on the site):** inside a verse popup, hover or tap any Arabic word to see its English
  meaning, transliteration, root letters, the root's original meaning and the lexicon entry. 26,885 words, 1,199 roots.
  Sources: word meanings from quran.com's word-by-word data; roots from the Quranic Arabic Corpus morphology; lexicon
  entries from Quran-Journey/roots (summaries of classical lexicons such as Lane's). The one-line "original meaning" of
  every root is curated in `roots_core.js`. `tools/build_words.py` rebuilds `words.js` for any list of surahs.
- **'Why this word?' (balagha), only where applicable:** curated notes on high-yield word choices
  (`tools/why_src.js` → `node tools/build_why.js` → `why.js`), plus grammar-based notes generated from the Quranic
  Arabic Corpus tags for patterns with a well-known rhetorical effect: oaths, inna…la- and la-…-nna emphasis, qad + past,
  passive voice, Forms VI and X, and the intensive faʿʿāl / faʿūl forms.
- **Surahs 111–114:** 129 more hotspots and word-by-word hover; every verse is shown.
- **An-Nisa' (4), all 14 posters:** 270 hotspots and word-by-word hover on all 176 verses.
  Noted on the page: poster 2's card 6 says the mother with children receives an eighth; in 4:11 the mother's share is
  a sixth, and the eighth is the wife's share in 4:12. Every nazm link the posters cite was checked against the text
  (e.g. naṣīban mafrūḍā occurs only in 4:7 and 4:118; kalālah only in 4:12 and 4:176; mīthāqan ghalīẓā is 4:21 and
  4:154 within the surah, and 33:7 elsewhere).
- **Al-Ma'idah (5), posters 1–10 of 12 (verses 1–100):** 189 hotspots; word-by-word hover covers all 120 verses.
  Checked links: shanaʾān ('hatred of a people') occurs only in 5:2 and 5:8; qawwāmīna only in 4:135 and 5:8 (same
  words, swapped order); ṣaʿīdan ṭayyibā only in 4:43 and 5:6. Poster 5's 'His Israel' is a typo for 'the Children of Israel'.
  Also checked: 'whoever does not judge by what Allah revealed' occurs only in 44, 45, 47 (three different endings);
  lā taghlū fī dīnikum only in 4:171 and 5:77; azlām only in 5:3 and 5:90.
- **Al-Anfal (8):** 50 hotspots and word-by-word hover. The poster's topic strip has numbering slips ('42–48',
  '55–63', '59–63', '64–66'); each card's popup shows the verses its words actually describe.
- **An-Nahl, Al-Isra, Al-Kahf (16–18):** 177 hotspots and word-by-word hover. Noted on the page: Al-Kahf's closing
  quote is labelled 18:13 but is Yusuf 12:3; An-Nahl card 9's 'fly' is 22:73 and card 16's sea storm is 17:67.
- Links: `#part5` opens Al-Baqarah part 5, `#aal-imran-2` opens Aal Imran part 2, `#s80` opens 'Abasa, `#s85-2` opens Al-Buruj's second poster, `#s42-1` opens Ash-Shura part 1.

## Editing a hotspot
Each hotspot in `parts.js` is
`{ label, box: [x1, y1, x2, y2], key: [verses cited], more: [neighbouring or recalled verses], note }`,
with the box in the image's own pixels. Tick **Show hotspot outlines** on the page to check the boxes line up.

## Sources
Arabic: Uthmani text from QuranEnc (King Fahd Complex encoding; its open-tanween marks are mapped to standard Unicode
when shown). English: Saheeh International. Urdu and transliteration (Tanzil.net): as bundled in
[quran-json](https://github.com/risan/quran-json) v3.1.2.
