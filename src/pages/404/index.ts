import pug from 'pug'

import { Block } from '../../services/router/types'
import { tmpl } from './index.tmpl'

import '../../styles/pages/404.scss'

const html = pug.render(tmpl)

class Error404 implements Block {
  template: string = html
}

export {
  Error404,
}
