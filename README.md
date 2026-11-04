# Quran · Memory Story Dashboard

An interactive page for the illustrated "Memory Story" posters of **Al-Baqarah (2)**, **Aal Imran (3)** and **Al-Mursalat (77) to Al-Balad (90)**. Pick a surah from the dropdown in the top bar.
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
- Links: `#part5` opens Al-Baqarah part 5, `#aal-imran-2` opens Aal Imran part 2, `#s80` opens 'Abasa, `#s85-2` opens Al-Buruj's second poster.

## Editing a hotspot
Each hotspot in `parts.js` is
`{ label, box: [x1, y1, x2, y2], key: [verses cited], more: [neighbouring or recalled verses], note }`,
with the box in the image's own pixels. Tick **Show hotspot outlines** on the page to check the boxes line up.

## Sources
Arabic: Uthmani text from QuranEnc (King Fahd Complex encoding; its open-tanween marks are mapped to standard Unicode
when shown). English: Saheeh International. Urdu and transliteration (Tanzil.net): as bundled in
[quran-json](https://github.com/risan/quran-json) v3.1.2.
