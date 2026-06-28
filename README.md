# My Discord Theme

A personal Discord theme project based on the MIT-licensed `midnight-discord` theme.

This copy is separated from the original fork checkout. It has its own local Git repository, its own theme name, and no upstream GitHub remote until you add one.

## Edit

- Change theme options in `themes/my-discord-theme.theme.css`.
- Change the actual Discord UI styling in `src/*.css`.
- Do not hand-edit `build/my-discord-theme.css`; it is generated.
- Run `pnpm build` to create `dist/my-discord-theme.theme.css`, a single combined theme file you can install manually.

The easiest first edits are the variables in `themes/my-discord-theme.theme.css`, especially `--font`, `--gap`, `--background-image`, `--background-image-url`, `--accent-*`, and `--bg-*`.

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

If you want this to be a separate GitHub repo instead of a fork, create a brand-new empty GitHub repository and push this folder to it. Do not use GitHub's Fork button. After publishing, replace the placeholder `https://example.com/my-discord-theme/...` URLs in `themes/my-discord-theme.theme.css` and `scripts/theme.config.js` with your real hosted CSS URL.

## Credits

This project is based on `midnight-discord` by refact0r and keeps the original MIT license in `LICENSE`.
