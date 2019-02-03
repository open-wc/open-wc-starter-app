import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => {
  import('./open-wc-app.js');
});
