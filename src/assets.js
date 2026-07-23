export const APP_CSS = `
* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    background: #eef1f4;
    font: normal 14px Arial, Helvetica, sans-serif;
    color: #5f6770;
}

textarea:focus,
button:focus,
input:focus {
    outline: 2px solid #3a86ff33;
    outline-offset: 2px;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track-piece {
    background: #f2f4f8;
}

::-webkit-scrollbar-thumb {
    background-color: #c9ced6;
    border-radius: 999px;
}

#loading {
    position: fixed;
    top: 16px;
    left: 30px;
    z-index: 3;
    display: none;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #3a86ff;
    box-shadow: 0 0 0 4px #3a86ff1f;
}

#loading.saving {
    display: inline-block;
    animation: pulse 1s ease-in-out infinite;
}

#loading.error {
    display: inline-block;
    background: #d9363e;
    box-shadow: 0 0 0 4px #d9363e24;
}

@keyframes pulse {
    0%, 100% { opacity: 0.45; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1); }
}

.note-container {
    min-height: calc(100vh - 56px);
    padding: 30px 30px 0;
}

.stack {
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(66, 75, 90, 0.10);
}

.stack .layer_1 {
    margin: 0 -2px;
    transform: translateY(-2px);
    background-color: #fdfeff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(80, 83, 87, 0.22);
}

.stack .layer_1 .layer_2 {
    margin: 0 -2px;
    transform: translateY(-2px);
    background-color: #fdfeff;
    border-radius: 4px;
    box-shadow: 0 1px 0 rgba(61, 64, 67, 0.16);
}

.stack .layer_1 .layer_2 .layer_3 {
    margin: 0 -2px;
    transform: translateY(-1px);
    display: flex;
    gap: 18px;
    min-height: calc(100vh - 116px);
    background-color: #fdfeff;
    border: 1px solid #dcdde1;
    border-radius: 4px;
    padding: 22px;
    color: #2f3337;
}

.stack .layer_1 .layer_2 .layer_3.markdown-mode {
    align-items: stretch;
}

.stack .layer_1 .layer_2 .layer_3.read-mode {
    display: block;
}

.contents {
    height: calc(100vh - 160px);
    width: 100%;
    margin: 0;
    border: none;
    background: transparent;
    resize: none;
    overflow-y: auto;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font: normal 15px Arial, Helvetica, sans-serif;
    line-height: 1.55;
    color: #2f3337;
}

.editor {
    flex: 1 1 0;
    min-width: 0;
    padding: 0 8px 0 0;
}

.editor.monospace {
    font: normal 14px Monaco, Consolas, 'Courier New', monospace;
    line-height: 1.65;
    tab-size: 4;
}

.preview {
    flex: 1 1 0;
    min-width: 0;
    padding: 0 6px;
}

.contents.hide {
    display: none;
}

.divide-line {
    flex: 0 0 1px;
    align-self: stretch;
    background: #e4e7eb;
}

.mobile-md-tabs {
    display: none;
}

.markdown-preview {
    --md-text: #24292f;
    --md-muted: #59636e;
    --md-border: #d8dee4;
    --md-soft-border: #eaeef2;
    --md-accent: #0969da;
    --md-accent-soft: #ddf4ff;
    --md-surface: #f6f8fa;
    --md-code-bg: #20252c;
    color: var(--md-text);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.72;
    white-space: normal;
    word-break: break-word;
    text-rendering: optimizeLegibility;
}

.read-mode .markdown-preview {
    max-width: 860px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
}

.markdown-preview > :first-child {
    margin-top: 0;
}

.markdown-preview > :last-child {
    margin-bottom: 0;
}

.markdown-preview h1,
.markdown-preview h2,
.markdown-preview h3,
.markdown-preview h4,
.markdown-preview h5,
.markdown-preview h6 {
    margin: 1.6em 0 0.65em;
    color: #161b22;
    font-weight: 650;
    line-height: 1.3;
}

.markdown-preview h1 {
    padding-bottom: 0.38em;
    border-bottom: 1px solid var(--md-border);
    font-size: 2em;
}

.markdown-preview h2 {
    padding-bottom: 0.35em;
    border-bottom: 1px solid var(--md-soft-border);
    font-size: 1.5em;
}

.markdown-preview h3 {
    font-size: 1.25em;
}

.markdown-preview h4 {
    font-size: 1.05em;
}

.markdown-preview h5,
.markdown-preview h6 {
    color: var(--md-muted);
    font-size: 0.95em;
}

.markdown-preview p,
.markdown-preview ul,
.markdown-preview ol,
.markdown-preview blockquote,
.markdown-preview pre,
.markdown-preview table,
.markdown-preview details {
    margin: 1em 0;
}

.markdown-preview ul,
.markdown-preview ol {
    padding-left: 1.6em;
}

.markdown-preview ul ul,
.markdown-preview ul ol,
.markdown-preview ol ul,
.markdown-preview ol ol {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
}

.markdown-preview li + li {
    margin-top: 0.35em;
}

.markdown-preview li::marker {
    color: #768390;
}

.markdown-preview li > p {
    margin-top: 0.45em;
    margin-bottom: 0.45em;
}

.markdown-preview li:has(> input[type='checkbox']) {
    list-style: none;
}

.markdown-preview strong {
    color: #161b22;
    font-weight: 650;
}

.markdown-preview del {
    color: var(--md-muted);
}

.markdown-preview a {
    color: var(--md-accent);
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 0.18em;
    transition: color 120ms ease, text-decoration-color 120ms ease;
}

.markdown-preview a:hover {
    color: #0550ae;
    text-decoration-color: currentColor;
}

.markdown-preview blockquote {
    padding: 0.7em 1em;
    border-left: 4px solid #54aeff;
    background: #f4faff;
    color: var(--md-muted);
}

.markdown-preview blockquote > :first-child {
    margin-top: 0;
}

.markdown-preview blockquote > :last-child {
    margin-bottom: 0;
}

.markdown-preview code {
    padding: 0.18em 0.42em;
    border: 1px solid #e6e9ed;
    border-radius: 4px;
    background: var(--md-surface);
    color: #cf222e;
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.88em;
}

.markdown-preview pre {
    padding: 16px 18px;
    border: 1px solid #30363d;
    border-radius: 6px;
    background: var(--md-code-bg);
    overflow: auto;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.markdown-preview pre code {
    padding: 0;
    border: 0;
    background: transparent;
    color: #e6edf3;
    font-size: 13px;
    line-height: 1.65;
    white-space: pre;
}

.markdown-preview table {
    width: 100%;
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
    border-spacing: 0;
    font-size: 0.94em;
}

.markdown-preview th,
.markdown-preview td {
    min-width: 96px;
    padding: 9px 12px;
    border: 1px solid var(--md-border);
    text-align: left;
    vertical-align: top;
}

.markdown-preview th {
    background: var(--md-surface);
    color: #161b22;
    font-weight: 650;
}

.markdown-preview tbody tr:nth-child(even) {
    background: #fbfcfd;
}

.markdown-preview img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1.2em auto;
    border: 1px solid var(--md-soft-border);
    border-radius: 6px;
    box-shadow: 0 4px 14px rgba(31, 35, 40, 0.08);
}

.markdown-preview hr {
    height: 1px;
    margin: 2em 0;
    border: 0;
    background: var(--md-border);
}

.markdown-preview input[type='checkbox'] {
    width: 1em;
    height: 1em;
    margin: 0 0.5em 0 -1.5em;
    accent-color: var(--md-accent);
    vertical-align: -0.12em;
}

.markdown-preview mark {
    padding: 0.08em 0.22em;
    border-radius: 3px;
    background: #fff8c5;
    color: inherit;
}

.markdown-preview kbd {
    padding: 0.16em 0.42em;
    border: 1px solid #afb8c1;
    border-bottom-width: 2px;
    border-radius: 4px;
    background: var(--md-surface);
    box-shadow: inset 0 -1px 0 #d8dee4;
    font: 0.78em ui-monospace, SFMono-Regular, Consolas, monospace;
}

.markdown-preview details {
    padding: 0.65em 0.85em;
    border: 1px solid var(--md-border);
    border-radius: 6px;
    background: #fbfcfd;
}

.markdown-preview summary {
    color: #161b22;
    font-weight: 600;
    cursor: pointer;
}

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 10px 30px;
    width: 100%;
    min-height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    background: #eef1f4e6;
    backdrop-filter: blur(8px);
}

.opt {
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    flex-wrap: wrap;
}

.github-link {
    height: 16px;
    color: #00000073;
}

.github-link:hover {
    color: #000000d9;
}

.last-modified {
    color: #7a828c;
    text-align: right;
}

.opt-button {
    cursor: pointer;
    min-height: 28px;
    padding: 5px 11px;
    border-radius: 5px;
    background: #276ef1;
    color: white;
    border: none;
}

.opt-button:hover {
    background: #1f5fcc;
}

.opt-button:active {
    background: #184fa9;
}

.opt-button:disabled,
.opt-switcher input:disabled + .slider {
    cursor: wait;
    opacity: 0.65;
}

.opt-desc {
    margin-left: 4px;
    color: #646c76;
}

.opt-switcher {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 22px;
}

.opt-switcher input {
    opacity: 0;
    width: 0;
    height: 0;
}

.opt-switcher .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #b9c0ca;
    transition: .2s;
    border-radius: 999px;
}

.opt-switcher .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .2s;
    border-radius: 50%;
}

.opt-switcher input:checked + .slider {
    background-color: #276ef1;
}

.opt-switcher input:checked + .slider:before {
    transform: translateX(16px);
}

.tips {
    user-select: none;
    color: #aab1ba;
    font-size: 40px;
    line-height: 1.1;
}

.modal {
    display: none;
}

.modal-mask {
    position: fixed;
    z-index: 4;
    inset: 0;
    margin: auto;
    background-color: #00000073;
}

.modal-content {
    max-width: 560px;
    width: calc(100vw - 40px);
    min-height: 84px;
    position: fixed;
    z-index: 5;
    inset: 0;
    margin: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 6px 20px #00000024;
    display: flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
}

.modal-content .close-btn {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 8px;
    width: 24px;
    height: 24px;
    line-height: 22px;
    font-size: 22px;
    font-weight: bold;
    color: #000;
}

.modal-content .close-btn:hover {
    color: #666;
}

.modal-body {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}

.modal-body > .opt-button {
    flex: 0 0 auto;
    font-size: 16px;
    min-height: 34px;
}

.modal-body > input {
    flex: 1 1 auto;
    min-width: 0;
    -webkit-appearance: none;
    font-size: 16px;
    outline: none;
    border: solid 2px #9aa3ad;
    border-radius: 6px;
    line-height: 28px;
    padding: 0 8px;
}

.modal-body > input:hover,
.modal-body > input:focus {
    border-color: #276ef1;
}

@media (max-width: 760px) {
    html,
    body {
        min-height: 100%;
    }

    .note-container {
        padding: 10px 10px 0;
        min-height: calc(100vh - 128px);
    }

    .stack,
    .stack .layer_1,
    .stack .layer_1 .layer_2,
    .stack .layer_1 .layer_2 .layer_3 {
        border-radius: 3px;
    }

    .stack .layer_1,
    .stack .layer_1 .layer_2,
    .stack .layer_1 .layer_2 .layer_3 {
        margin: 0;
        transform: none;
    }

    .stack .layer_1 .layer_2 .layer_3 {
        min-height: calc(100vh - 156px);
        padding: 12px;
    }

    .stack .layer_1 .layer_2 .layer_3.markdown-mode {
        flex-direction: column;
        gap: 10px;
    }

    .mobile-md-tabs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3px;
        flex: 0 0 auto;
        padding: 3px;
        border: 1px solid #d9dee6;
        border-radius: 6px;
        background: #f4f6f8;
    }

    .mobile-md-tab {
        min-width: 0;
        min-height: 34px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #5f6770;
        font: inherit;
        font-weight: 600;
    }

    .mobile-md-tab.active {
        background: #276ef1;
        color: #fff;
    }

    .contents {
        height: calc(100vh - 224px);
        min-height: 320px;
        font-size: 16px;
        line-height: 1.6;
    }

    .read-mode .contents,
    .layer_3:not(.markdown-mode) .contents {
        height: calc(100vh - 170px);
    }

    .divide-line {
        display: none;
    }

    .markdown-mode.md-mobile-edit .preview,
    .markdown-mode.md-mobile-preview .editor {
        display: none;
    }

    .markdown-mode.md-mobile-edit .editor,
    .markdown-mode.md-mobile-preview .preview {
        display: block;
        flex: 1 1 auto;
    }

    .markdown-preview {
        font-size: 15.5px;
        line-height: 1.68;
    }

    .read-mode .markdown-preview {
        padding-right: 4px;
        padding-left: 4px;
    }

    .markdown-preview h1 {
        font-size: 1.72em;
    }

    .markdown-preview h2 {
        font-size: 1.38em;
    }

    .markdown-preview pre {
        padding: 13px 14px;
    }

    .markdown-preview blockquote {
        padding: 0.6em 0.8em;
    }

    .markdown-preview th,
    .markdown-preview td {
        padding: 7px 9px;
    }

    .footer {
        position: static;
        padding: 10px 10px calc(12px + env(safe-area-inset-bottom));
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        background: transparent;
        backdrop-filter: none;
    }

    .opt {
        width: 100%;
        gap: 7px;
    }

    .opt-button {
        min-height: 34px;
    }

    .opt-desc {
        margin-left: 2px;
        white-space: nowrap;
    }

    .opt-switcher {
        width: 42px;
        height: 24px;
    }

    .opt-switcher .slider:before {
        height: 18px;
        width: 18px;
    }

    .opt-switcher input:checked + .slider:before {
        transform: translateX(18px);
    }

    .github-link {
        order: 2;
    }

    .last-modified {
        order: 1;
        margin-left: auto;
        font-size: 12px;
    }

    .tips {
        font-size: 28px;
    }

    .modal-content {
        width: calc(100vw - 24px);
        min-height: 132px;
        padding: 34px 16px 18px;
    }

    .modal-body {
        flex-direction: column;
        align-items: stretch;
    }

    .modal-body > .opt-button {
        width: 100%;
    }

    .modal-body > input {
        width: 100%;
    }
}

@media (max-width: 380px) {
    .note-container {
        padding-left: 8px;
        padding-right: 8px;
    }

    .stack .layer_1 .layer_2 .layer_3 {
        padding: 10px;
    }

    .contents {
        min-height: 280px;
    }

    .opt {
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: start;
        align-items: center;
        column-gap: 7px;
        row-gap: 8px;
        font-size: 13px;
    }

    .opt .opt-button {
        grid-column: 1 / -1;
        justify-self: start;
    }
}
`

export function clientApp() {
    const DEFAULT_LANG = 'en'
    const SUPPORTED_LANG = {
        en: {
            err: 'Error',
            networkErr: 'Network request failed. Please check your connection and try again.',
            saving: 'Saving...',
            savePending: 'Save failed. Changes are still in this browser and will retry automatically.',
            pepw: 'Please enter password.',
            pwcnbe: 'Password is empty!',
            enpw: 'Enter a new password(Keeping it empty will remove the current password)',
            pwss: 'Password set successfully.',
            pwrs: 'Password removed successfully.',
            cpys: 'Copied!',
        },
        zh: {
            err: '出错了',
            networkErr: '网络请求失败，请检查网络后重试',
            saving: '正在保存...',
            savePending: '保存失败，当前修改仍在浏览器中，将自动重试',
            pepw: '请输入密码',
            pwcnbe: '密码不能为空！',
            enpw: '输入新密码（留空可清除当前密码）',
            pwss: '密码设置成功！',
            pwrs: '密码清除成功！',
            cpys: '已复制',
        },
    }

    const getI18n = key => {
        const userLang = (navigator.language || navigator.userLanguage || DEFAULT_LANG).split('-')[0]
        const targetLang = Object.keys(SUPPORTED_LANG).find(l => l === userLang) || DEFAULT_LANG
        return SUPPORTED_LANG[targetLang][key]
    }

    const formatError = err => {
        if (err instanceof Error) {
            if (err.name === 'TypeError' && /Failed to fetch|NetworkError|Load failed/i.test(err.message)) {
                return getI18n('networkErr')
            }
            return err.message || String(err)
        }
        if (typeof err !== 'string') return String(err)
        try {
            return JSON.parse(err)
        } catch (_error) {
            return err
        }
    }

    const errHandle = err => {
        alert(`${getI18n('err')}: ${formatError(err)}`)
    }

    const debounce = (func, delay) => {
        let tid = null
        return (...args) => {
            window.clearTimeout(tid)
            tid = window.setTimeout(() => func(...args), delay)
        }
    }

    const setSavingState = state => {
        const $loading = document.querySelector('#loading')
        if (!$loading) return
        $loading.className = state || ''
        if (state === 'saving') {
            $loading.title = getI18n('saving')
            return
        }
        if (state === 'error') {
            $loading.title = getI18n('savePending')
            return
        }
        $loading.removeAttribute('title')
    }

    const sanitizeHtml = html => {
        if (!window.DOMPurify) {
            return ''
        }
        return window.DOMPurify.sanitize(html, {
            ADD_ATTR: ['target'],
        })
    }

    const renderPlain = (node, text) => {
        if (node) {
            node.textContent = text || ''
        }
    }

    const renderMarkdown = (node, text) => {
        if (!node) return

        if (!window.marked) {
            renderPlain(node, text)
            return
        }

        if (window.marked.setOptions) {
            window.marked.setOptions({
                breaks: true,
                gfm: true,
                headerIds: false,
                mangle: false,
            })
        }

        const parsed = window.marked.parse(text || '')
        node.innerHTML = sanitizeHtml(parsed)

        node.querySelectorAll('a[href]').forEach(anchor => {
            anchor.target = '_blank'
            anchor.rel = 'noopener noreferrer'
        })

        node.querySelectorAll('img').forEach(img => {
            img.loading = 'lazy'
        })

        node.querySelectorAll('input[type="checkbox"]').forEach(input => {
            input.disabled = true
        })
    }

    const postJSON = (url, body) => window.fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(res => res.json())

    const passwdPrompt = () => {
        const passwd = window.prompt(getI18n('pepw'))
        if (passwd == null) return

        if (!passwd.trim()) {
            alert(getI18n('pwcnbe'))
            return
        }

        const path = location.pathname
        postJSON(`${path}/auth`, { passwd })
            .then(res => {
                if (res.err !== 0) {
                    return errHandle(res.msg)
                }
                if (res.data.refresh) {
                    window.location.reload()
                }
            })
            .catch(err => errHandle(err))
    }

    window.passwdPrompt = passwdPrompt

    window.addEventListener('DOMContentLoaded', function () {
        const $textarea = document.querySelector('#contents')
        const $pwBtn = document.querySelector('.opt-pw')
        const $modeBtn = document.querySelector('.opt-mode > input')
        const $shareBtn = document.querySelector('.opt-share > input')
        const $previewPlain = document.querySelector('#preview-plain')
        const $previewMd = document.querySelector('#preview-md')
        const $shareModal = document.querySelector('.share-modal')
        const $closeBtn = document.querySelector('.share-modal .close-btn')
        const $copyBtn = document.querySelector('.share-modal .opt-button')
        const $shareInput = document.querySelector('.share-modal input')
        const $markdownShell = document.querySelector('.markdown-mode')
        const $mobileMdTabs = Array.from(document.querySelectorAll('.mobile-md-tab'))

        const initialValue = $textarea ? $textarea.value : ''
        renderPlain($previewPlain, initialValue)
        renderMarkdown($previewMd, initialValue)

        const setMobileMarkdownView = view => {
            if (!$markdownShell) return

            const nextView = view === 'preview' ? 'preview' : 'edit'
            $markdownShell.classList.toggle('md-mobile-edit', nextView === 'edit')
            $markdownShell.classList.toggle('md-mobile-preview', nextView === 'preview')
            $mobileMdTabs.forEach(tab => {
                const active = tab.dataset.mdView === nextView
                tab.classList.toggle('active', active)
                tab.setAttribute('aria-pressed', active ? 'true' : 'false')
            })

            try {
                window.localStorage.setItem('cloud-note-md-mobile-view', nextView)
            } catch (_error) {
                // localStorage can be unavailable in restrictive browser modes.
            }
        }

        if ($mobileMdTabs.length) {
            let storedView = 'edit'
            try {
                storedView = window.localStorage.getItem('cloud-note-md-mobile-view') || storedView
            } catch (_error) {
                // Keep the default edit view.
            }
            setMobileMarkdownView(storedView)
            $mobileMdTabs.forEach(tab => {
                tab.addEventListener('click', () => setMobileMarkdownView(tab.dataset.mdView))
            })
        }

        let pendingValue = null
        let saving = false
        let retryTimer = null

        const scheduleSaveRetry = () => {
            if (retryTimer !== null) return
            retryTimer = window.setTimeout(() => {
                retryTimer = null
                flushSave()
            }, 3000)
        }

        const flushSave = () => {
            if (!$textarea || saving || pendingValue === null) return
            if (retryTimer !== null) {
                window.clearTimeout(retryTimer)
                retryTimer = null
            }

            const content = pendingValue
            pendingValue = null
            saving = true
            setSavingState('saving')
            let shouldRetry = false
            let shouldWaitForUser = false

            window.fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ t: content }),
            })
                .then(res => res.json())
                .then(res => {
                    if (res.err !== 0) {
                        pendingValue = $textarea.value
                        shouldWaitForUser = true
                        setSavingState('error')
                        errHandle(res.msg)
                    }
                })
                .catch(err => {
                    pendingValue = $textarea.value
                    shouldRetry = true
                    setSavingState('error')
                    console.warn(getI18n('savePending'), err)
                })
                .finally(() => {
                    saving = false
                    if (shouldRetry) {
                        scheduleSaveRetry()
                        return
                    }
                    if (shouldWaitForUser) {
                        return
                    }
                    if (pendingValue !== null) {
                        flushSave()
                    } else if (!document.querySelector('#loading.error')) {
                        setSavingState('')
                    }
                })
        }

        const debouncedSave = debounce(flushSave, 650)
        const canEdit = $textarea && !$textarea.classList.contains('hide')

        if (canEdit) {
            $textarea.addEventListener('input', function () {
                renderMarkdown($previewMd, $textarea.value)
                pendingValue = $textarea.value
                debouncedSave()
            })

            window.addEventListener('online', flushSave)
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    flushSave()
                }
            })
        }

        if ($textarea && $previewMd) {
            let syncing = false
            $textarea.addEventListener('scroll', function () {
                if (syncing) return
                const maxInput = $textarea.scrollHeight - $textarea.clientHeight
                const maxPreview = $previewMd.scrollHeight - $previewMd.clientHeight
                if (maxInput <= 0 || maxPreview <= 0) return

                syncing = true
                $previewMd.scrollTop = ($textarea.scrollTop / maxInput) * maxPreview
                window.requestAnimationFrame(() => {
                    syncing = false
                })
            })
        }

        if ($pwBtn) {
            $pwBtn.onclick = function () {
                const passwd = window.prompt(getI18n('enpw'))
                if (passwd == null) return

                $pwBtn.disabled = true
                postJSON(`${window.location.pathname}/pw`, {
                    passwd: passwd.trim(),
                })
                    .then(res => {
                        if (res.err !== 0) {
                            return errHandle(res.msg)
                        }
                        alert(passwd ? getI18n('pwss') : getI18n('pwrs'))
                    })
                    .catch(err => errHandle(err))
                    .finally(() => {
                        $pwBtn.disabled = false
                    })
            }
        }

        if ($modeBtn) {
            $modeBtn.onclick = function (e) {
                $modeBtn.disabled = true
                postJSON(`${window.location.pathname}/setting`, {
                    mode: e.target.checked ? 'md' : 'plain',
                })
                    .then(res => {
                        if (res.err !== 0) {
                            $modeBtn.checked = !$modeBtn.checked
                            $modeBtn.disabled = false
                            return errHandle(res.msg)
                        }
                        window.location.reload()
                    })
                    .catch(err => {
                        $modeBtn.checked = !$modeBtn.checked
                        $modeBtn.disabled = false
                        errHandle(err)
                    })
            }
        }

        if ($shareBtn) {
            $shareBtn.onclick = function (e) {
                const isShare = e.target.checked
                $shareBtn.disabled = true
                postJSON(`${window.location.pathname}/setting`, {
                    share: isShare,
                })
                    .then(res => {
                        if (res.err !== 0) {
                            $shareBtn.checked = !$shareBtn.checked
                            return errHandle(res.msg)
                        }

                        if (isShare && $shareInput && $shareModal) {
                            $shareInput.value = `${window.location.origin}/share/${res.data}`
                            $shareModal.style.display = 'block'
                            $shareInput.select()
                        }
                    })
                    .catch(err => {
                        $shareBtn.checked = !$shareBtn.checked
                        errHandle(err)
                    })
                    .finally(() => {
                        $shareBtn.disabled = false
                    })
            }
        }

        if ($shareModal && $closeBtn && $copyBtn && $shareInput) {
            $closeBtn.onclick = function () {
                $shareModal.style.display = 'none'
            }

            $copyBtn.onclick = function () {
                const copyTask = window.clipboardCopy
                    ? Promise.resolve(window.clipboardCopy($shareInput.value))
                    : navigator.clipboard.writeText($shareInput.value)
                copyTask.then(() => {
                    const originText = $copyBtn.innerHTML
                    const originColor = $copyBtn.style.background
                    $copyBtn.innerHTML = getI18n('cpys')
                    $copyBtn.style.background = '#f59e0b'
                    window.setTimeout(() => {
                        $shareModal.style.display = 'none'
                        $copyBtn.innerHTML = originText
                        $copyBtn.style.background = originColor
                    }, 1500)
                }).catch(err => errHandle(err))
            }
        }
    })
}
