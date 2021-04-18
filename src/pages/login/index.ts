import pug from 'pug'

import { tmpl } from './index.tmpl'

const html = pug.render(tmpl)

const root = document.querySelector('#root')

if (root) {
  root.innerHTML = html
}
