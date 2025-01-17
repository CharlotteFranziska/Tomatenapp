
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 5082, hash: 'b703b3b9cec5d023870824d88ae08069dae8af3d932cd8bc726debe0bb240347', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1089, hash: '10c83a10919401be61cb1c48e2f0a97da8a56a453c9e3d807eb84cdb2b7a40b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 90125, hash: 'b468c70cf6c1beb817f7b1adb9ab81bd29c66110390469f496e2627d4d1ca5d1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FTI53IU5.css': {size: 231704, hash: 'vhe6lTkNv3U', text: () => import('./assets-chunks/styles-FTI53IU5_css.mjs').then(m => m.default)}
  },
};
