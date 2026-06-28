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
    displayName: 'my-discord-theme',
    // Source order matters. Earlier files set basics; later files can override them.
    sourceFiles: [
        'main.css',
        'animations.css',
        'background-image.css',
        'chatbar.css',
        'colors.css',
        'addon-compat.css',
        'addon-layout-toggles.css',
        'dms-button.css',
        'top-bar.css',
        'transparency-blur.css',
        'user-panel.css',
        'window-controls.css',
        'addons/chatBubbles.css',
        'addons/dmSearchBubble.css',
        'addons/donator-tags.css',
        'addons/filter.css',
        'addons/floatingGuildsAdd.css',
        'addons/iconTabs-disabledGames.css',
        'addons/iconTabs.css',
        'addons/libraryGrid.css',
        'addons/minimalServerList.css',
        'addons/minimalServerMenu.css',
        'addons/minimalUserList.css',
        'addons/overHeadServers.css',
        'addons/serverDrawer-oneGrid.css',
        'addons/serverDrawer-twoGrid.css',
        'addons/slideDownStatus.css',
        'addons/tag-animations.css',
        'addons/twoColumnServer.css',
        'addons/user-tags.css',
        'addons/userSettingsModal.css',
        'addons/yeet.css',
        'desktop-transparency.css',
    ],
};
