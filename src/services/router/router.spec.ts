import { expect } from 'chai'
import { JSDOM } from 'jsdom'

import { SITEMAP } from '../../pages/index.structure'
import { Router } from './router'

const { window } = new JSDOM(`
<!doctype html><html>
  <body>
    <div id="root"></div>
  </body>
</html>
`, {
  'url': 'http://example.com/',
})

global.window = window as unknown as Window & typeof globalThis
global.document = window.document

class Mock {
  template = ''
}

describe('Router', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let router: any

  beforeEach(() => {
    router = new Router('#root')
    router
      .use(SITEMAP.index, Mock)
      .use(SITEMAP.chat, Mock)
      .start()
  })

  it('should change history state', () => {
    router.go(SITEMAP.chat)
    router.go(SITEMAP.index)
    expect(window.history.length).to.eq(3)
  })
})
