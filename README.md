# Surah Al-Baqarah · Memory Story Dashboard

An interactive page for the illustrated "Memory Story" posters of Surah Al-Baqarah.
**Hover over (or tap) any panel or scene** in a poster to get a popup with the **original Arabic verse(s)**,
plus English (Saheeh International) and/or Urdu translation and an optional transliteration.

- **Click** a hotspot to pin the popup (Esc or click elsewhere to close).
- **Click a verse** in the right-hand list to light up every spot in the picture that refers to it.
- Gold tag = the poster cites that verse. Blue-grey tag = same passage, summarised in the poster but not cited.

## Files
| File | What it is |
|---|---|
| `index.html` | The dashboard (plain HTML/CSS/JS, no build step) |
| `parts.js` | The hotspot map: a box per panel/scene + which verses it shows |
| `verses.js` | Al-Baqarah 2:1–74: Arabic (Uthmani), English, Urdu, transliteration |
| `images/partN.webp` | The posters |

## Publish on GitHub Pages
1. Create a new repository on GitHub (e.g. `baqarah-dashboard`).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/baqarah-dashboard.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**, set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/baqarah-dashboard/`.

## Adding Parts 5–16
1. Save the poster as `images/part5.webp`.
2. Add the verses to `verses.js`. Generate them from the same source as the existing ones
   ([quran-json](https://www.npmjs.com/package/quran-json), `dist/chapters/en/2.json` and `ur/2.json`), so the text stays exact.
3. Add an entry to `PARTS` in `parts.js`. Each hotspot is
   `{ label, box: [x1, y1, x2, y2], key: [verses cited], more: [other verses in the passage], note }`,
   with the box in the image's own pixels. Tick **Show hotspot outlines** on the page to check the boxes line up.

## Sources
Arabic: Uthmani text from QuranEnc (King Fahd Complex encoding; its open-tanween marks are mapped to standard Unicode
when shown). English: Saheeh International. Urdu and transliteration (Tanzil.net): as bundled in
[quran-json](https://github.com/risan/quran-json) v3.1.2.
