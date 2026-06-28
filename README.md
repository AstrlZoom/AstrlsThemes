# My Discord Theme

A personal Discord theme project based on the MIT-licensed `midnight-discord` theme.

This copy is separated from the original fork checkout. It has its own theme name and its own GitHub repo at `https://github.com/AstrlZoom/MyDiscordTheme`.

For a beginner-friendly map of what to edit, read `docs/EDITING.md`.

## Edit

- Change theme options in `themes/my-discord-theme.theme.css`.
- Change the actual Discord UI styling in `src/*.css`.
- Change add-ons in `src/addons/*.css`.
- Do not hand-edit `build/my-discord-theme.css`; it is generated.
- Run `pnpm build` to create `dist/my-discord-theme.theme.css`, a single combined theme file you can install manually.

The easiest first edits are the variables in `themes/my-discord-theme.theme.css`, especially `--font`, `--gap`, `--dms-icon-*`, `--background-image`, `--background-image-url`, `--accent-*`, and `--bg-*`.

## Live Desktop Testing

Install dependencies once:

```powershell
pnpm install
```

Create `.env` in the project root and point it at the theme file Vencord or BetterDiscord should load:

```powershell
DEV_OUTPUT_PATH=C:\Users\tyler\AppData\Roaming\Vencord\themes\my-discord-theme-dev.theme.css
```

For BetterDiscord, use:

```powershell
DEV_OUTPUT_PATH=C:\Users\tyler\AppData\Roaming\BetterDiscord\themes\my-discord-theme-dev.theme.css
```

Then run:

```powershell
pnpm dev
```

Enable `my-discord-theme-dev.theme.css` in your Discord client. While `pnpm dev` is running, edits to `src/*.css` or `themes/my-discord-theme.theme.css` are rebuilt into that enabled theme file.

## Add-ons

The add-ons from your temp folder are copied into `src/addons`.

Cosmetic add-ons can stack. Server-list/layout add-ons are presets because they rewrite the same Discord columns, widths, and transforms:

- `libraryGrid.css`
- `minimalServerList.css`
- `minimalServerMenu.css`
- `overHeadServers.css`
- `serverDrawer-twoGrid.css`
- `slideDownStatus.css`
- `user-tags.css`

To try one, open `themes/my-discord-theme.theme.css` and set that add-on's variable to `on`. Keep the other layout preset variables `off`.

Example:

```css
--addon-minimal-server-menu: on;
```

Making all of these work together would mean rebuilding them into one new layout instead of stacking the original files unchanged.

## Desktop Transparency

The theme now uses a darker glass tint and blur instead of being fully see-through. If native window transparency is enabled in your client, the desktop will still show through slightly.

If it is too see-through, increase the alpha numbers in `--desktop-tint` and the `--bg-*` values in `themes/my-discord-theme.theme.css`. Example: `0.34` is more transparent, `0.55` is less transparent.

## Browser Testing

You can also test in Discord web without touching your desktop client:

```powershell
pnpm serve
```

Open `https://discord.com/app`, open DevTools, and paste this into the Console:

```js
fetch('http://127.0.0.1:8765/inject.js').then((r) => r.text()).then(eval)
```

The injected theme checks for rebuilds every second and reloads automatically.

## Publishing Later

This repo now uses real GitHub URLs in `themes/my-discord-theme.theme.css` and `scripts/theme.config.js`.

Private repos are fine for saving your work, but Discord cannot load a private raw GitHub CSS URL for other people. If you make the repo public later, commit `build/my-discord-theme.css` so the online import has something to load.

For local installs, use `dist/my-discord-theme.theme.css` or the live dev theme file.

## Credits

This project is based on `midnight-discord` by refact0r and keeps the original MIT license in `LICENSE`.
