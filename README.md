# AstrlGlass

AstrlGlass is a personal dark glass Discord theme by AstrlZoom, based on the MIT-licensed `midnight-discord` theme.

This copy is separated from the original fork checkout. It has its own theme metadata and its own GitHub repo at `https://github.com/AstrlZoom/MyDiscordTheme`.

The editable and generated files now use the AstrlGlass name everywhere.

For a beginner-friendly map of what to edit, read `docs/EDITING.md`.

## Edit

- Change theme options in `themes/AstrlGlass.theme.css`.
- Change the actual Discord UI styling in `src/*.css`.
- Do not hand-edit `build/AstrlGlass.css`; it is generated.
- Run `pnpm build` to create `dist/AstrlGlass.theme.css`, a single combined theme file you can install manually.

The easiest first edits are the variables in `themes/AstrlGlass.theme.css`, especially `--font`, `--gap`, `--dms-icon-*`, `--background-image`, `--background-image-url`, `--accent-*`, and `--bg-*`.

## Live Desktop Testing

Install dependencies once:

```powershell
pnpm install
```

Create `.env` in the project root and point it at the theme file Vencord or BetterDiscord should load:

```powershell
DEV_OUTPUT_PATH=C:\Users\tyler\AppData\Roaming\Vencord\themes\AstrlGlass-dev.theme.css
```

For BetterDiscord, use:

```powershell
DEV_OUTPUT_PATH=C:\Users\tyler\AppData\Roaming\BetterDiscord\themes\AstrlGlass-dev.theme.css
```

Then run:

```powershell
pnpm dev
```

Enable `AstrlGlass-dev.theme.css` in your Discord client. While `pnpm dev` is running, edits to `src/*.css` or `themes/AstrlGlass.theme.css` are rebuilt into that enabled theme file.

## Scripts

- `pnpm dev` watches the editable theme files and writes live updates to the Discord theme path in `.env`.
- `pnpm build` rebuilds `build/AstrlGlass.css` and `dist/AstrlGlass.theme.css`.

## Desktop Transparency

The theme now uses a darker glass tint and blur instead of being fully see-through. If native window transparency is enabled in your client, the desktop will still show through slightly.

If it is too see-through, increase the alpha numbers in `--desktop-tint` and the `--bg-*` values in `themes/AstrlGlass.theme.css`. Example: `0.34` is more transparent, `0.55` is less transparent.

## Publishing Later

This repo now uses real GitHub URLs in `themes/AstrlGlass.theme.css` and `scripts/theme.config.js`.

Because the repo is public, Discord can load the raw GitHub import from `build/AstrlGlass.css`.

For local installs, use `dist/AstrlGlass.theme.css` or the live dev theme file.

## Credits

This project is based on `midnight-discord` by refact0r and keeps the original MIT license in `LICENSE`.
