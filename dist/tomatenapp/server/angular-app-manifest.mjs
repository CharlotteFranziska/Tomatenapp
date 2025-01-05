
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://charlottefranziska.github.io/Tomatenapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://charlottefranziska.github.io/Tomatenapp"
  }
],
  assets: {
    'index.csr.html': {size: 5129, hash: '78a35cf42b3bc84966f9f828f6abdc026b622626e6d2420fd5d1616fe5a1edf4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1136, hash: '44b82a62126814f9e20b3891224792dc33a2516e2dd879bd31478bb7836f932c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 90465, hash: '2c4aaa3945d10c1323f03ad27bfd62c86dd81295fad199d222896ea46e718c47', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FTI53IU5.css': {size: 231704, hash: 'vhe6lTkNv3U', text: () => import('./assets-chunks/styles-FTI53IU5_css.mjs').then(m => m.default)}
  },
};
