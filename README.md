# Quran · Memory Story Dashboard

An interactive page for the illustrated "Memory Story" posters of **Surah Al-Baqarah (2)** and **Surah Aal Imran (3)**. Switch surah with the buttons above the part tabs.
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
| `verses.js` | All 286 verses of Al-Baqarah: Arabic (Uthmani), English, Urdu, transliteration |
| `parts3.js`, `verses3.js` | The same for Aal Imran (3:1–200) |
| `images/partN.webp`, `images/s3-partN.webp` | The posters |

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
- **Al-Baqarah:** all 16 posters (234 hotspots). Verses 202–203 and 252–254 fall between posters; they are listed at
  the end of the preceding part, marked "between posters".
- **Aal Imran:** both posters (88 hotspots). Poster 1 prints no verse numbers, so its verses were identified from each
  panel's wording; the page says so on that part.
- Links: `#part5` opens Al-Baqarah part 5, `#aal-imran-2` opens Aal Imran part 2.

## Editing a hotspot
Each hotspot in `parts.js` is
`{ label, box: [x1, y1, x2, y2], key: [verses cited], more: [neighbouring or recalled verses], note }`,
with the box in the image's own pixels. Tick **Show hotspot outlines** on the page to check the boxes line up.

## Sources
Arabic: Uthmani text from QuranEnc (King Fahd Complex encoding; its open-tanween marks are mapped to standard Unicode
when shown). English: Saheeh International. Urdu and transliteration (Tanzil.net): as bundled in
[quran-json](https://github.com/risan/quran-json) v3.1.2.
