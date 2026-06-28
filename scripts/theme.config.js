/*
 * Build settings for AstrlGlass.
 * Change paths only when you intentionally rename files or add/remove CSS modules.
 */
module.exports = {
    // Main editable theme file. This has the BetterDiscord/Vencord metadata and user-facing variables.
    baseFile: 'themes/my-discord-theme.theme.css',
    // Generated module CSS. Commit this when publishing so the online import can load it.
    buildFile: 'build/my-discord-theme.css',
    // Generated one-file theme. This is easiest for local manual installs.
    distFile: 'dist/my-discord-theme.theme.css',
    // Must exactly match the @import line in the base theme file.
    buildImport:
        "@import url('https://raw.githubusercontent.com/AstrlZoom/MyDiscordTheme/main/build/my-discord-theme.css');",
    displayName: 'AstrlGlass',
    // Source order matters. Earlier files set basics; later files can override them.
    sourceFiles: [
        'main.css',
        'animations.css',
        'background-image.css',
        'chatbar.css',
        'colors.css',
        'dms-button.css',
        'top-bar.css',
        'transparency-blur.css',
        'user-panel.css',
        'window-controls.css',
        'desktop-transparency.css',
    ],
};
