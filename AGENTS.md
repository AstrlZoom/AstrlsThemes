# AstrlGlass

A personal CSS theme for Discord by AstrlZoom, derived from `midnight-discord`.

## Layout

- `src/*.css` contains the actual theme modules.
- `themes/AstrlGlass.theme.css` contains user-facing variables and theme metadata.
- `docs/EDITING.md` is the beginner-friendly customization guide.
- `build/AstrlGlass.css` is generated module CSS. Do not hand-edit it.
- `dist/AstrlGlass.theme.css` is the generated single-file theme for manual installation.
- `scripts/theme.config.js` owns paths, display name, build import, and source order.
- `scripts/dev.js` watches files and writes the combined theme to `DEV_OUTPUT_PATH`.

The public theme name and filenames are AstrlGlass.

## Rules

- Edit `src/*.css` for structure and selectors.
- Edit `themes/AstrlGlass.theme.css` for variables, toggles, and metadata.
- Keep beginner-facing explanations in `README.md`, `docs/EDITING.md`, and short comments near editable variables.
- When adding or removing a source CSS file, update `sourceFiles` in `scripts/theme.config.js`.
- Avoid `!important` unless a Discord rule genuinely cannot be overridden with selector specificity.
