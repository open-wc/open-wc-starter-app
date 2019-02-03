import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/open-wc-app';

describe('<open-wc-app>', () => {
  it('has a title', async () => {
    const el = await fixture(html`<open-wc-app></open-wc-app>`);
    const title = el.shadowRoot.querySelector('h1').textContent;
    expect(title).to.equal('open-wc');
  });
});
