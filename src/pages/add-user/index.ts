import pug from 'pug'

import { initAddUser } from '../../modules/chat/add-user/index'
import { Block } from '../../services/router/types'
import { tmpl } from './index.tmpl'

import '../../styles/pages/chat.scss'

const html = pug.render(tmpl)

class AddUser implements Block {
  template: string = html

  init(): void {
    initAddUser()
  }
}

export {
  AddUser,
}
