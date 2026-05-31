# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A zero-dependency, single-file web app for learning English vocabulary in a TikTok/Douyin-style interface. No build step, no package manager, no framework — open the HTML files directly in a browser.

## Files

- **`index.html`** — The core vocabulary app. Contains all CSS, JS, and word data in one file.
- **`douyin_frame.html`** — A decorative phone-frame shell that embeds `index.html` in an `<iframe>`, mimicking the Douyin mobile app UI (status bar, nav tabs, bottom tab bar).
- `index_old.html`, `index_copy.html` — Backup/historical versions, not actively used.
- `bkgrd.jpg` — Background image referenced by `index.html`.

## Architecture

### `index.html` — two modes in one file

**Feed mode** (default): A scrollable list of word cards. Each card shows the word, phonetic, meaning, an example sentence with blurred Chinese translation (click to reveal), and a linked video thumbnail.

**Immerse mode**: A fullscreen TikTok-style swipe interface triggered by the expand button. Uses `scroll-snap-type: y mandatory` for snapping between slides. Auto-reads each word via `SpeechSynthesis` on scroll.

**Data**: All vocabulary is in the `WORDS` array at the top of the `<script>` block. Each entry has: `word`, `level` (CET4/CET6/IELTS), `phonetic`, `meaning`, `en`, `cn`, `videoTitle`, `source`, `timestamp`, `cover` (image URL), `url` (link).

**State**: Persisted to `localStorage` under key `wordVideoApp/v3` as `{ starred: [], learned: [] }`.

**Filtering**: `getFiltered()` applies the active tab filter (all / starred / learned / unlearned / CET4 / CET6 / IELTS) and search query together.

**Event handling**: Uses event delegation on `#feed` and `#immerseScroll` via `data-act` attributes (`speak`, `star`, `learn`, `reveal`). Keyboard shortcuts work in immerse mode: `↓/j/Space` next, `↑/k` prev, `s` star, `l/Enter` learned, `r` re-read, `Esc` close.

**Color**: `hashGrad(word)` deterministically picks a gradient from `PALETTES` based on the word string, used as `--grad` CSS variable for each card/slide background.

### `douyin_frame.html` — shell wrapper

Renders a 420px-wide phone UI chrome and embeds `index.html` via `<iframe id="contentFrame">`. The "查看详情" button communicates into the iframe by calling `frame.contentDocument.getElementById('openImmerse').click()`. Supports loading alternate content via `?src=` URL param or `window.loadContent(url)` / `window.setContentHTML(html)` JS APIs.

## Adding words

Edit the `WORDS` array in `index.html`. Each object must include all fields; `cover` is an image URL (currently uses `https://picsum.photos/seed/<word>/160` pattern).

## Viewing the app

Open `index.html` directly in a browser, or open `douyin_frame.html` to see it inside the phone frame mockup.
