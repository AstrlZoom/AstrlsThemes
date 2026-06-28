# AstrlGlass

A personal CSS theme for Discord by AstrlZoom, derived from `midnight-discord`.

## Layout

- `src/*.css` contains the actual theme modules.
- `src/addons/*.css` contains optional add-ons copied into the local build.
- `themes/my-discord-theme.theme.css` contains user-facing variables and theme metadata.
- `docs/EDITING.md` is the beginner-friendly customization guide.
- `build/my-discord-theme.css` is generated module CSS. Do not hand-edit it.
- `dist/my-discord-theme.theme.css` is the generated single-file theme for manual installation.
- `scripts/theme.config.js` owns paths, display name, build import, and source order.
- `scripts/dev.js` watches files and writes the combined theme to `DEV_OUTPUT_PATH`.
- `scripts/serve.js` serves a browser-injected live theme at `http://127.0.0.1:8765`.

The public theme name is AstrlGlass. Keep the `my-discord-theme` filenames unless the user's live Discord setup is updated too.

## Rules

- Edit `src/*.css` for structure and selectors.
- Edit `themes/my-discord-theme.theme.css` for variables, toggles, and metadata.
- Keep beginner-facing explanations in `README.md`, `docs/EDITING.md`, and short comments near editable variables.
- When adding or removing a source CSS file, update `sourceFiles` in `scripts/theme.config.js`.
- Keep mutually exclusive server-list add-ons controlled by the `--addon-*` variables in `themes/my-discord-theme.theme.css`; only one layout preset should be on at a time.
- Avoid `!important` unless a Discord rule genuinely cannot be overridden with selector specificity.
