// ==UserScript==
// @name         FSP
// @namespace    https://wsp.kbtu.kz/
// @version      2.0
// @description  Calm pastel-pink interface with accessible, natural buttons.
// @match        https://wsp.kbtu.kz/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const footerId = 'kbtu-pastel-credit';
    const assets = {
        newsHeader: 'https://raw.githubusercontent.com/App1epli/FSP/main/Traps/fem_header.png',
        homeBackground: 'https://raw.githubusercontent.com/App1epli/FSP/main/Traps/background.png'
    };

    const css = `
        :root {
            --pastel-page: #fff7fa;
            --pastel-surface: #fffdfd;
            --pastel-surface-muted: #fff0f5;
            --pastel-border: #efc3d3;
            --pastel-accent: #c96891;
            --pastel-accent-hover: #af4f79;
            --pastel-text: #513b45;
            --pastel-focus: #8c5fb8;
        }

        html, body, .v-app, .v-ui {
            background: var(--pastel-page) !important;
            color: var(--pastel-text) !important;
            font-family: "Nunito", "Segoe UI", "Trebuchet MS", Arial, sans-serif !important;
        }

        html.kbtu-pastel-home {
            background-color: #fff7fa !important;
            background-image: url("${assets.homeBackground}") !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            background-attachment: fixed !important;
        }

        html.kbtu-pastel-home body {
            background: rgba(255, 247, 250, 0.84) !important;
        }

        html.kbtu-pastel-home .v-app,
        html.kbtu-pastel-home .v-ui,
        html.kbtu-pastel-home .v-login-content {
            background-color: transparent !important;
            background-image: none !important;
        }

        .v-app .card, .v-app .v-panel, .v-app .v-window-contents,
        .v-app .v-table, .v-app .v-tabsheet-content, .v-app .v-formlayout {
            background: var(--pastel-surface) !important;
            border-color: var(--pastel-border) !important;
        }

        .v-app .card, .v-app .v-panel, .v-app .v-window, .v-app .v-table {
            border: 1px solid var(--pastel-border) !important;
            border-radius: 14px !important;
            box-shadow: 0 6px 18px rgba(126, 68, 94, 0.10) !important;
        }

        .v-app .v-panel-caption, .v-app .v-window-header,
        .v-app .v-tabsheet-tabitemcell-selected {
            background: #fbe3ec !important;
            color: var(--pastel-text) !important;
        }

        .v-app h1, .v-app h2, .v-app h3, .v-app .v-caption,
        .v-app .v-window-header, .v-app .v-panel-caption {
            font-family: "Comfortaa", "Nunito", sans-serif !important;
            font-weight: 700 !important;
        }

        .v-app .v-tabsheet-tabitemcell-selected,
        .v-app .v-menubar-menuitem-selected,
        .v-app .v-notification {
            font-family: "M PLUS Rounded 1c", "Nunito", sans-serif !important;
            font-weight: 600 !important;
        }

        .v-app .v-button, .v-app .v-nativebutton {
            min-height: 40px !important;
            padding: 8px 16px !important;
            border: 1px solid #bd6285 !important;
            border-radius: 10px !important;
            background: #d97b9f !important;
            background-image: none !important;
            box-shadow: 0 1px 2px rgba(82, 43, 59, 0.16) !important;
            color: #ffffff !important;
            cursor: pointer !important;
            font: 700 14px/1.25 "Nunito", "Segoe UI", Arial, sans-serif !important;
            text-shadow: none !important;
            transition: background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease !important;
        }

        .v-app .v-button:hover, .v-app .v-nativebutton:hover {
            background: var(--pastel-accent-hover) !important;
            border-color: #9f4169 !important;
            box-shadow: 0 3px 7px rgba(82, 43, 59, 0.18) !important;
            transform: translateY(-1px);
        }

        .v-app .v-button:active, .v-app .v-nativebutton:active {
            background: #994061 !important;
            box-shadow: inset 0 1px 3px rgba(72, 27, 43, 0.20) !important;
            transform: none;
        }

        .v-app .v-button.quiet, .v-app .v-button-quiet {
            min-width: 40px !important;
            padding: 7px !important;
            border-color: #e9b9cb !important;
            background: #fff8fb !important;
            color: var(--pastel-accent) !important;
        }

        .v-app .v-button.quiet:hover, .v-app .v-button-quiet:hover {
            background: #f8dce7 !important;
            border-color: #d486a4 !important;
        }

        .v-app .v-button:focus, .v-app .v-nativebutton:focus, .v-app a:focus,
        .v-app input:focus, .v-app textarea:focus, .v-app select:focus {
            outline: 3px solid rgba(140, 95, 184, 0.42) !important;
            outline-offset: 2px !important;
        }

        .v-app .v-button.v-disabled, .v-app .v-nativebutton:disabled {
            background: #ecd7df !important;
            border-color: #dfc7d1 !important;
            box-shadow: none !important;
            color: #9b7e8a !important;
            cursor: not-allowed !important;
            transform: none !important;
        }

        .v-app .v-link a, .v-app a { color: #a74770 !important; }

        .v-app .v-link a {
            display: block !important;
            padding: 10px 12px !important;
            border: 1px solid transparent !important;
            border-radius: 9px !important;
            font-weight: 600 !important;
            line-height: 1.35 !important;
            text-decoration: none !important;
            transition: background-color 150ms ease, border-color 150ms ease !important;
        }

        .v-app .v-link a:hover {
            background: var(--pastel-surface-muted) !important;
            border-color: #efc3d3 !important;
        }

        .v-app input, .v-app textarea, .v-app .v-filterselect-input,
        .v-app .v-datefield-textfield, .v-app .v-textfield {
            min-height: 38px !important;
            border: 1px solid #d9a6ba !important;
            border-radius: 8px !important;
            background: #fffefe !important;
            box-shadow: none !important;
            color: var(--pastel-text) !important;
        }

        .v-app .v-information-component-info, .v-app .v-information-component-warning {
            position: relative !important;
            overflow: visible !important;
            border: 0 !important;
            background: transparent !important;
        }

        .v-app .v-information-component-info > .v-horizontallayout,
        .v-app .v-information-component-warning > .v-horizontallayout {
            box-sizing: border-box !important;
            min-height: 72px !important;
            height: auto !important;
            border: 1px solid var(--pastel-border) !important;
            border-radius: 14px !important;
            background: #fff9fb !important;
            box-shadow: 0 5px 14px rgba(126, 68, 94, 0.10) !important;
        }

        .v-app .v-information-component-warning > .v-horizontallayout {
            border-color: #e7b2c3 !important;
            background: #fff5f7 !important;
        }

        .v-app .v-information-component-info .v-label,
        .v-app .v-information-component-warning .v-label {
            color: var(--pastel-text) !important;
            font-weight: 500 !important;
            line-height: 1.5 !important;
        }

        .kbtu-news-header-notice > .v-horizontallayout {
            min-height: 112px !important;
            padding: 42px 18px 12px !important;
        }

        .kbtu-news-header-image {
            position: absolute !important;
            top: -94px !important;
            left: 24px !important;
            z-index: 4 !important;
            width: min(380px, 44vw) !important;
            max-height: 140px !important;
            object-fit: contain !important;
            object-position: left bottom !important;
            pointer-events: none !important;
            filter: drop-shadow(0 6px 5px rgba(105, 58, 77, 0.22)) !important;
        }
        }

        .v-app .v-table-header-wrap, .v-app .v-table-header td,
        .v-app .v-table-cell-content { border-color: #efd3de !important; }

        .v-app .v-table-header-wrap, .v-app .v-table-header td {
            background: #fbe6ee !important;
            color: var(--pastel-text) !important;
        }

        .kbtu-pastel-menu-source { display: none !important; }

        #kbtu-quick-actions {
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(3, minmax(170px, 1fr));
            gap: 16px;
            width: min(100% - 40px, 1080px);
            margin: 22px auto 30px;
            padding: 4px;
        }

        .kbtu-quick-action {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 92px;
            padding: 16px;
            border: 1px solid #df9db7;
            border-radius: 14px;
            background: #fffdfd;
            box-shadow: 0 4px 12px rgba(126, 68, 94, 0.09);
            color: #8f3d61 !important;
            font: 700 15px/1.35 "Nunito", "Segoe UI", Arial, sans-serif;
            text-align: center;
            text-decoration: none;
            transition: background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }

        .kbtu-quick-action:hover {
            border-color: #bf6186;
            background: #fff0f5;
            box-shadow: 0 7px 16px rgba(126, 68, 94, 0.14);
            transform: translateY(-2px);
        }

        #kbtu-drawer-toggle {
            position: fixed;
            top: 50%;
            left: 0;
            z-index: 30010;
            display: grid;
            width: 48px;
            min-height: 48px;
            padding: 8px;
            place-items: center;
            border: 1px solid #bd6285;
            border-left: 0;
            border-radius: 0 12px 12px 0;
            background: #d97b9f;
            box-shadow: 2px 3px 9px rgba(82, 43, 59, 0.16);
            color: #fff;
            cursor: pointer;
            font: 700 24px/1 "Nunito", "Segoe UI", Arial, sans-serif;
            transform: translateY(-50%);
        }

        #kbtu-drawer-toggle:hover { background: #af4f79; }

        #kbtu-navigation-drawer {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 30020;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            width: min(360px, 88vw);
            padding: 22px 16px;
            border-right: 1px solid #e6abc1;
            background: #fffafd;
            box-shadow: 5px 0 22px rgba(82, 43, 59, 0.18);
            overflow-y: auto;
            transform: translateX(-105%);
            transition: transform 200ms ease;
        }

        body.kbtu-drawer-open #kbtu-navigation-drawer { transform: translateX(0); }

        #kbtu-drawer-close {
            align-self: flex-end;
            min-height: 36px;
            padding: 6px 10px;
            border: 1px solid #e3afc2;
            border-radius: 8px;
            background: #fff0f5;
            color: #984664;
            cursor: pointer;
            font: 700 14px/1 "Nunito", "Segoe UI", Arial, sans-serif;
        }

        #kbtu-drawer-links { display: grid; gap: 7px; }

        #kbtu-drawer-links a {
            display: block;
            padding: 10px 11px;
            border: 1px solid transparent;
            border-radius: 8px;
            color: #8f3d61 !important;
            font: 700 14px/1.35 "Nunito", "Segoe UI", Arial, sans-serif;
            text-decoration: none;
        }

        #kbtu-drawer-links a:hover {
            border-color: #efc3d3;
            background: #fff0f5;
        }

        #kbtu-drawer-backdrop {
            position: fixed;
            inset: 0;
            z-index: 30015;
            display: none;
            background: rgba(81, 59, 69, 0.28);
        }

        body.kbtu-drawer-open #kbtu-drawer-backdrop { display: block; }

        #${footerId} {
            position: fixed;
            right: 16px;
            bottom: 12px;
            z-index: 30000;
            padding: 7px 11px;
            border: 1px solid #efc3d3;
            border-radius: 999px;
            background: rgba(255, 253, 253, 0.96);
            box-shadow: 0 3px 10px rgba(126, 68, 94, 0.12);
            font: 600 12px/1.2 "Nunito", "Segoe UI", Arial, sans-serif;
        }

        #${footerId} a { color: #a74770 !important; text-decoration: none; }
        #${footerId} a:hover { text-decoration: underline; }

        @media (max-width: 600px) {
            .v-app .v-button, .v-app .v-nativebutton { min-height: 44px !important; }
            #kbtu-quick-actions {
                grid-template-columns: 1fr;
                width: calc(100% - 28px);
                gap: 11px;
            }
            .kbtu-quick-action { min-height: 62px; }
            #${footerId} { right: 8px; bottom: 8px; }
        }

        @media (max-width: 760px) {
            .kbtu-news-header-notice > .v-horizontallayout {
                min-height: 112px !important;
                padding: 42px 10px 8px !important;
            }
            .kbtu-news-header-image {
                top: -54px !important;
                left: 12px !important;
                width: min(250px, 68vw) !important;
                max-height: 100px !important;
            }
        }
    `;

    function installStyle() {
        if (document.getElementById('kbtu-pastel-style')) return;
        const style = document.createElement('style');
        style.id = 'kbtu-pastel-style';
        style.textContent = css;
        document.head.appendChild(style);
    }

    function installFont() {
        if (document.getElementById('kbtu-interface-fonts')) return;
        const font = document.createElement('link');
        font.id = 'kbtu-interface-fonts';
        font.rel = 'stylesheet';
        font.href = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@600;700&family=M+PLUS+Rounded+1c:wght@600&family=Nunito:wght@400;500;600;700&display=swap';
        document.head.appendChild(font);
    }

    function installFooter() {
        if (document.getElementById(footerId) || !document.body) return;
        const footer = document.createElement('footer');
        footer.id = footerId;
        footer.innerHTML = '<a href="https://github.com/App1epli" target="_blank" rel="noopener noreferrer">github.com/App1epli</a>';
        document.body.appendChild(footer);
    }

    function installHomeBackground() {
        document.documentElement.classList.toggle('kbtu-pastel-home', location.pathname === '/');
    }

    function installNewsHeader() {
        const firstInfoNotice = document.querySelector('.v-information-component-info');
        if (!firstInfoNotice || firstInfoNotice.querySelector('.kbtu-news-header-image')) return;

        firstInfoNotice.classList.add('kbtu-news-header-notice');
        const image = document.createElement('img');
        image.className = 'kbtu-news-header-image';
        image.src = assets.newsHeader;
        image.alt = '';
        image.setAttribute('aria-hidden', 'true');
        firstInfoNotice.appendChild(image);
    }

    const primaryLinks = [
        { path: '/JournalView' },
        { path: '/Stud' },
        { path: '/RegistrationOnline' },
        { path: '/AttestationView' },
        { path: '/SubjectSchedule' },
        { path: '/StudentSchedule' },
        { path: '/RegistrationStudent' },
        { path: '/StudentAddDropRequest' },
        { path: '/Transcript' }
    ];

    function getPath(link) {
        try {
            return new URL(link.href, location.href).pathname.replace(/\/$/, '');
        } catch (_) {
            return '';
        }
    }

    function copyLink(source, className) {
        const link = document.createElement('a');
        link.className = className;
        link.href = source.href;
        link.textContent = source.textContent.trim();
        if (source.target) link.target = source.target;
        if (link.target === '_blank') link.rel = 'noopener noreferrer';
        return link;
    }

    function closeDrawer() {
        document.body.classList.remove('kbtu-drawer-open');
        const toggle = document.getElementById('kbtu-drawer-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    function installNavigation() {
        if (document.getElementById('kbtu-quick-actions')) return;

        const allLinks = [...document.querySelectorAll('.v-link a[href]')];
        const primaryPaths = new Set(primaryLinks.map(({ path }) => path));
        const firstPrimaryLink = allLinks.find((link) => primaryPaths.has(getPath(link)));
        if (!firstPrimaryLink) return;

        const sourcePanel = firstPrimaryLink.closest('.v-panel');
        if (!sourcePanel || !sourcePanel.parentElement) return;

        const menuLinks = [...sourcePanel.querySelectorAll('.v-link a[href]')];

        const linksByPath = new Map(menuLinks.map((link) => [getPath(link), link]));
        const quickActions = document.createElement('nav');
        quickActions.id = 'kbtu-quick-actions';

        primaryLinks.forEach(({ path }) => {
            const source = linksByPath.get(path);
            if (source) quickActions.appendChild(copyLink(source, 'kbtu-quick-action'));
        });

        if (!quickActions.children.length) return;

        const drawerToggle = document.createElement('button');
        drawerToggle.id = 'kbtu-drawer-toggle';
        drawerToggle.type = 'button';
        drawerToggle.textContent = '☰';
        drawerToggle.setAttribute('aria-controls', 'kbtu-navigation-drawer');
        drawerToggle.setAttribute('aria-expanded', 'false');

        const backdrop = document.createElement('div');
        backdrop.id = 'kbtu-drawer-backdrop';

        const drawer = document.createElement('aside');
        drawer.id = 'kbtu-navigation-drawer';
        drawer.innerHTML = '<button id="kbtu-drawer-close" type="button">×</button><nav id="kbtu-drawer-links"></nav>';

        const drawerLinks = drawer.querySelector('#kbtu-drawer-links');
        menuLinks.forEach((link) => {
            if (!primaryPaths.has(getPath(link))) {
                drawerLinks.appendChild(copyLink(link, 'kbtu-drawer-link'));
            }
        });

        drawerToggle.addEventListener('click', () => {
            const isOpen = document.body.classList.toggle('kbtu-drawer-open');
            drawerToggle.setAttribute('aria-expanded', String(isOpen));
        });
        drawer.querySelector('#kbtu-drawer-close').addEventListener('click', closeDrawer);
        backdrop.addEventListener('click', closeDrawer);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeDrawer();
        });

        sourcePanel.classList.add('kbtu-pastel-menu-source');
        sourcePanel.parentElement.insertBefore(quickActions, sourcePanel);
        document.body.append(drawerToggle, backdrop, drawer);
    }

    function watchForNavigation() {
        if (!document.body || document.documentElement.dataset.kbtuPastelWatching) return;
        document.documentElement.dataset.kbtuPastelWatching = 'true';

        let queued = false;
        const tryInstall = () => {
            queued = false;
            installNavigation();
            installNewsHeader();
        };
        const observer = new MutationObserver(() => {
            if (queued || document.getElementById('kbtu-quick-actions')) return;
            queued = true;
            window.setTimeout(tryInstall, 80);
        });

        observer.observe(document.body, { childList: true, subtree: true });
        tryInstall();
    }

    function installTheme() {
        installFont();
        installStyle();
        installFooter();
        installHomeBackground();
        watchForNavigation();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', installTheme, { once: true });
    } else {
        installTheme();
    }
})();
