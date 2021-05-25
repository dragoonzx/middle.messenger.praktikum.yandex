import { router } from '../services/router/index'
import { Error404 } from './404/index'
import { Error500 } from './500/index'
import { AddUser } from './add-user/index'
import { ChatOpen } from './chat-open/index'
import { Chat } from './chat/index'
import { SITEMAP } from './index.structure'
import { Login } from './login/index'
import { Registration } from './registration/index'
import { SettingsAvatar } from './settings-avatar/index'
import { SettingsData } from './settings-data/index'
import { SettingsPassword } from './settings-password/index'
import { Settings } from './settings/index'

import '../styles/main.scss'

router
  .use(SITEMAP.index, Login)
  .use(SITEMAP.chat, Chat)
  .use(SITEMAP['chat-open'], ChatOpen)
  .use(SITEMAP['add-user'], AddUser)
  .use(SITEMAP.login, Login)
  .use(SITEMAP.registration, Registration)
  .use(SITEMAP.settings, Settings)
  .use(SITEMAP['settings-avatar'], SettingsAvatar)
  .use(SITEMAP['settings-data'], SettingsData)
  .use(SITEMAP['settings-password'], SettingsPassword)
  .use(SITEMAP[404], Error404)
  .use(SITEMAP[500], Error500)
  .start()
