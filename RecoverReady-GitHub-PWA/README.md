# RecoverReady — GitHub Pages PWA package

This folder is ready to copy into the **root of the existing `Recover-Ready` GitHub repository**. It is configured for the project URL `https://cherrywang712-coder.github.io/Recover-Ready/`.

## Upload these files

- `index.html` — integrated mobile-responsive page, iPhone PWA metadata and service-worker registration
- `manifest.json` — install name, display mode and app icons
- `sw.js` — offline app-shell caching
- `icons/` — app icons

Keep the existing repository's other files unless you know they are no longer needed. Replace its current `index.html`, and add/replace the manifest, service worker and `icons` folder from this package.

## Publish

1. Open the `Recover-Ready` repository on GitHub.
2. Use **Add file → Upload files**.
3. Upload `index.html`, `manifest.json`, `sw.js`, and the three files inside `icons/` while preserving the `icons/` folder structure. If easier, upload the ZIP is not enough by itself—GitHub does not unpack ZIPs through the normal file upload UI.
4. Commit the changes to the branch configured for GitHub Pages (usually `main`).
5. Wait for Pages to deploy, then open `https://cherrywang712-coder.github.io/Recover-Ready/` in Safari on iPhone.
6. In Safari, tap **Share → Add to Home Screen**. If offered, enable **Open as Web App**, then tap **Add**.

## Notes

- All project paths intentionally start with `/Recover-Ready/`, because this is a GitHub Pages project site rather than a root-domain site.
- The site must be served over HTTPS for service workers to work; GitHub Pages normally provides HTTPS.
- If you later change the app-shell files and the old cached version remains, bump `CACHE_NAME` in `sw.js` (for example, to `recoverready-shell-v2`) and publish again.
- This remains a demonstration prototype. The readiness score, route options and chat replies are simulated; they are not medical clearance, live sensor data, verified directions or a real AI/clinical service.
