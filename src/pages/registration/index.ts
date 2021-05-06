import pug from 'pug'

import { initRegistration } from '../../modules/registration/index'
import { Block } from '../../services/router/types'
import { tmpl } from './index.tmpl'

import '../../styles/pages/onboarding.scss'

const html = pug.render(tmpl)

class Registration implements Block {
  template: string = html

  init(): void {
    initRegistration()
  }
}

export {
  Registration,
}
