#!/usr/bin/env python3
"""Build word-by-word data (English meaning, root, root meaning) for given surahs.

Sources (downloaded separately, paths passed on the command line):
  --morph  quran-morphology.txt   Quranic Arabic Corpus morphology (mustafa0x/quran-morphology) -> root of each word
  --wbw    data.json              quran.com word-by-word data (@kmaslesa/holy-quran-word-by-word-full-data) -> English gloss
  --roots  root_meanings.json     root meanings summarised from classical lexicons (Quran-Journey/roots)

Usage: python3 -I tools/build_words.py --morph M --wbw W --roots R --out words100.js 100 [101 ...]
"""
import argparse, collections, json, re

ap = argparse.ArgumentParser()
ap.add_argument('--morph', required=True); ap.add_argument('--wbw', required=True)
ap.add_argument('--roots', required=True); ap.add_argument('--out', required=True)
ap.add_argument('surahs', nargs='+', type=int)
a = ap.parse_args()
want = set(a.surahs)

# 1) roots per word from the corpus (a word = several segments; the root sits on the stem)
roots = {}
for line in open(a.morph, encoding='utf-8'):
    p = line.rstrip('\n').split('\t')
    if len(p) < 4 or not p[0][0].isdigit():
        continue
    s, v, w, _ = map(int, p[0].split(':'))
    if s not in want:
        continue
    m = re.search(r'ROOT:([^|]+)', p[3])
    if m:
        roots[(s, v, w)] = m.group(1)
    else:
        roots.setdefault((s, v, w), None)

# 2) English gloss + transliteration per word
gloss = {}
for page in json.load(open(a.wbw, encoding='utf-8')):
    for ay in page['ayahs']:
        for w in ay['words']:
            if w.get('char_type_name') != 'word':
                continue
            s, v = map(int, w['parentAyahVerseKey'].split(':'))
            if s in want:
                gloss[(s, v, w['position'])] = (w['translation']['text'], w['transliteration']['text'])

# 3) root meanings; keys look like "ع د و" with hamza forms written as ا / ء
RM = json.load(open(a.roots, encoding='utf-8'))
def norm(r):
    r = r.replace(' ', '')
    return r.translate(str.maketrans({'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ؤ': 'و', 'ئ': 'ي', 'ى': 'ي', 'ء': 'ا'}))
RMN = {}
for k, v in RM.items():
    RMN.setdefault(norm(k), v)

# lexicon entries in the source that belong to a different root (shown nowhere; the curated meaning covers them)
BAD_LEX = {'قهر'}
out, missing, lex = {}, collections.Counter(), {}
for (s, v, w), r in sorted(set(roots.items()) | {(k, roots.get(k)) for k in gloss}):
    g, t = gloss.get((s, v, w), ('', ''))
    rm = RMN.get(norm(r)) if r else None
    if r and not rm:
        missing[r] += 1
    out.setdefault(str(s), {}).setdefault(str(v), []).append({'g': g, 't': t, 'r': r or ''})
    if r and rm and r not in BAD_LEX:
        # the source sometimes runs phrases together ("far awayRemoved"): put a separator back
        lex[r] = re.sub(r'([a-z)\]])([A-Z])', r'\1; \2', rm).strip()

js = ('// Word-by-word data. English meaning: quran.com word-by-word; root: Quranic Arabic Corpus morphology;\n'
      '// root meaning: Quran-Journey/roots (summaries from classical lexicons such as Lane\'s).\n'
      'window.WORDS_BY_SURAH = Object.assign(window.WORDS_BY_SURAH || {}, ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ');\n'
      'window.ROOT_LEX = Object.assign(window.ROOT_LEX || {}, ' + json.dumps(lex, ensure_ascii=False, separators=(',', ':')) + ');\n')
open(a.out, 'w', encoding='utf-8').write(js)
print('surahs', sorted(want), 'words', sum(len(x) for s in out.values() for x in s.values()),
      'roots without meaning:', dict(missing) or 'none')
