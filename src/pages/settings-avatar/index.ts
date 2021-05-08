import pug from 'pug'

import { initSettingsAvatar }
  from '../../modules/settings/settings-avatar/index'
import { Block } from '../../services/router/types'
import { tmpl } from './index.tmpl'

import '../../styles/pages/settings.scss'

const html = pug.render(tmpl)

class SettingsAvatar implements Block {
  template: string = html

  init(): void {
    initSettingsAvatar()
  }
}

export {
  SettingsAvatar,
}
