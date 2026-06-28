// ==UserScript==
// @name         AstrlGlass dev loader
// @namespace    https://github.com/AstrlZoom/MyDiscordTheme
// @version      1.0.0
// @description  Auto-injects AstrlGlass served by a local `pnpm serve` process.
// @match        https://discord.com/*
// @match        https://canary.discord.com/*
// @match        https://ptb.discord.com/*
// @run-at       document-end
// @grant        none
// @connect      127.0.0.1
// ==/UserScript==

(async () => {
    // Keep this URL matched to scripts/serve.js.
    const base = 'http://127.0.0.1:8765';
    try {
        const code = await (await fetch(`${base}/inject.js`)).text();
        (0, eval)(code);
    } catch (error) {
        console.warn('[AstrlGlass-dev] server not reachable at', base, '- run `pnpm serve` in the repo');
    }
})();
