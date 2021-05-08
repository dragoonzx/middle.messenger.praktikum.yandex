import pug from 'pug'

import { initSettingsData }
  from '../../modules/settings/settings-password/index'
import { Block } from '../../services/router/types'
import { tmpl } from './index.tmpl'

import '../../styles/pages/settings.scss'

const html = pug.render(tmpl)

class SettingsData implements Block {
  template: string = html

  init(): void {
    initSettingsData()
  }
}

export {
  SettingsData,
}
