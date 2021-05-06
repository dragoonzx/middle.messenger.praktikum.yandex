import pug from 'pug'

import { initLogin } from '../../modules/login/index'
import { Block } from '../../services/router/types'
import { tmpl } from './index.tmpl'

import '../../styles/pages/onboarding.scss'

const html = pug.render(tmpl)

class Login implements Block {
  template: string = html

  init(): void {
    initLogin()
  }
}

export {
  Login,
}
