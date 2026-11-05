# GA4 workshop deck

"Guessing where your customers come from? Track it with Google Analytics": the slide deck for the Bolt.new customer workshop on Thu, Nov 5.

Plain HTML, CSS and JavaScript. No build step and nothing to install.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All 39 slides, written out as static sections, in the same order as `deck-content.md` |
| `styles.css` | Design tokens, layouts, animation |
| `deck.js` | Navigation, hash routing, scaling, presenter notes, Copy buttons |
| `screenshots/` | Screenshots used on the slides; `MANIFEST.md` maps each to its slide |
| `deck-content.md` | Source of truth for every word on every slide |

## Run it locally

Double-click `index.html`, or open it in any browser. It works straight from the file.

If you'd rather serve it (closer to how it behaves online):

```bash
python3 -m http.server 8123
```

Then open http://localhost:8123/#1.

## Presenting

| Key | Action |
| --- | --- |
| → · Space · PageDown | Next slide |
| ← · Shift+Space · PageUp | Previous slide |
| Home / End | First / last slide |
| N | Show or hide presenter notes |

- Swipe left or right on a phone or tablet.
- The pill at the bottom has previous, next, the slide count and a fullscreen button.
- Every slide has its own link: `#1` … `#26`, plus `#4b`, `#14b`, `#15b`, `#15c`, `#16b`, `#17a`, `#17b`, `#17c`, `#17ca`, `#21b`, `#21b2`, `#21c` and `#25b`. The address updates as you move, so you can share a link to any slide.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to it (the `main` branch).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then pick `main` and `/ (root)`. Click **Save**.
4. After a minute or two the deck is live at `https://<your-username>.github.io/<repo-name>/`.

All paths are relative, so it also works in a subfolder and after importing into Bolt.new.

## Common changes

**Add the Wednesday screenshots.** Save them into `screenshots/` with exactly these names:

- `S8-01-traffic-acquisition-weekly.png`
- `S8-02-demo-account-traffic-acquisition.png`

Slide 23 shows a labeled placeholder until each file exists, then picks it up automatically. No code changes needed.

**Turn the bolt.new gradient background off.** In `index.html`, delete `data-bg="bolt"` from the `<html>` tag on line 2. The original faint blue glow comes back.

**Change slide copy.** Edit `deck-content.md` first (it's the source of truth), then make the same change in `index.html`.
