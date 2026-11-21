#!/usr/bin/env python3
"""Build clearquran.js — The Clear Quran (Dr. Mustafa Khattab) verse by verse — from your own copy of the e-book PDF.

The Clear Quran is © Dr. Mustafa Khattab, all rights reserved, so its text is not kept in this public repository
(clearquran.js is listed in .gitignore). The page uses it when the file is present and falls back to Saheeh International.

How the PDF is read: verse numbers are set in Arial-Bold, verse text in Arial 15pt, topic headings and surah
introductions in Arial-Italic, footnote markers in Arial 9.4pt. Each verse count is checked against the standard count.

Usage: python3 tools/build_clearquran.py "The_Clear_Quran.pdf"      (needs: pip install pdfplumber)
"""
import sys, json, re, pdfplumber
COUNTS = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]  # verses per surah, 1–114

pdf = pdfplumber.open(sys.argv[1])
lines = []                                   # every text line of the book, in reading order
for pg in pdf.pages:
    ws = [w for w in pg.extract_words(extra_attrs=['fontname', 'size'], keep_blank_chars=False) if w['size'] > 12]
    ws.sort(key=lambda w: (w['bottom'], w['x0']))
    cur, ref = [], 0
    for w in ws:                              # words whose baselines are within 6pt belong to one line
        if cur and abs(w['bottom'] - ref) > 6:
            lines.append(sorted(cur, key=lambda x: x['x0'])); cur = []
        if not cur: ref = w['bottom']
        cur.append(w)
    if cur: lines.append(sorted(cur, key=lambda x: x['x0']))

kind = lambda w: 'B' if 'Bold' in w['fontname'] and 'Italic' not in w['fontname'] else 'I' if 'Italic' in w['fontname'] else 'R'
out, sura, verse, buf, started = {}, 0, 0, [], False
def flush():
    if sura and verse:
        t = ' '.join(buf)
        t = re.sub(r'\s+', ' ', t).strip()
        t = re.sub(r'\s*—\s*', '—', t)                     # Khattab's em dashes are unspaced
        t = re.sub(r'\s+([.,;:!?’”])', r'\1', t)             # stray spaces left by italic words
        t = t.replace('( )', '').replace('“ ', '“').replace('‘ ', '‘')
        out.setdefault(str(sura), {})[str(verse)] = t
for i, ln in enumerate(lines):
    text = ' '.join(w['text'] for w in ln)
    if text.startswith('ENDNOTES') or (sura == 114 and text.startswith('THEMATIC INDEX')): break
    nxt = ' '.join(w['text'] for w in lines[i + 1]) if i + 1 < len(lines) else ''
    m = re.match(r'^(\d{1,3})\. ', text)
    if m and all(kind(w) == 'B' for w in ln) and nxt.startswith('('):     # surah title, e.g. "2. The Cow" + "( Al-Baqarah )"
        flush(); sura, verse, buf, started = int(m.group(1)), 0, [], False; continue
    if not sura: continue
    if all(kind(w) == 'I' for w in ln) or (ln and kind(ln[0]) in 'BI' and text.startswith('(') and verse == 0): continue   # headings, introduction, transliterated title
    if text.startswith('In the Name of Allah—the Most Compassionate, Most Merciful') and verse == 0 and sura != 1: continue  # basmalah line above a surah
    if text.strip() == '***': continue
    for w in ln:
        if kind(w) == 'B' and re.fullmatch(r'\d{1,3}\.', w['text']):
            n = int(w['text'][:-1])
            if n == verse + 1:
                flush(); verse, buf = n, []; continue
        if verse: buf.append(w['text'])
flush()
# A few verse numbers in the book are not set in bold (54:49–55). Where a surah came out short, split its last verse
# at the next numbers in sequence ("… 49. Indeed, We …").
for s_, vs in out.items():
    total = COUNTS[int(s_) - 1]
    while len(vs) < total:
        last = max(map(int, vs)); m = re.search(r'\s%d\.\s' % (last + 1), vs[str(last)])
        if not m: break
        vs[str(last)], vs[str(last + 1)] = vs[str(last)][:m.start()].strip(), vs[str(last)][m.end():].strip()
bad = [s for s in range(1, 115) if len(out.get(str(s), {})) != COUNTS[s - 1]]
if bad: sys.exit(f'verse counts do not match for surahs {bad}; nothing written')
open('clearquran.js', 'w', encoding='utf-8').write(
    '// The Clear Quran: A Thematic English Translation, by Dr. Mustafa Khattab. © 2015 Dr. Mustafa Khattab, all rights reserved.\n'
    '// Extracted from the e-book by tools/build_clearquran.py for personal study. Not for redistribution.\n'
    'window.CLEAR_QURAN = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('clearquran.js: surahs', len(out), 'verses', sum(len(v) for v in out.values()))
