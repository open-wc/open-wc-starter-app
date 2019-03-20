import { html, fixture, expect } from '@open-wc/testing';

import '../src/my-app';

describe('<my-app>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<my-app></my-app>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <my-app title="different"></my-app>
    `);
    expect(el.title).to.equal('different');
  });
});
