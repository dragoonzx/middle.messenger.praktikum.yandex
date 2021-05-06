import pug from 'pug'

import { initChat } from '../../modules/chat/index'
import { Block } from '../../services/router/types'
import { initTemplate } from './index.tmpl'

import '../../styles/pages/chat.scss'

const renderHTML = async (): Promise<string> => {
  const tmpl = await initTemplate()

  return pug.render(tmpl)
}

class Chat implements Block {
  template: Promise<string> = renderHTML()

  init(): void {
    initChat()
  }
}

export {
  Chat,
}
