/* eslint-disable max-len */
import avatar from 'url:../../../static/images/avatar.png'

import { Chat } from '../../api/index'

const fetchChats = async (): Promise<string> => {
  try {
    return await Chat.getChats()
  } catch {
    return '[]'
  }
}

const initTemplate = async (): Promise<string> => {
  const chats = await fetchChats()
  return `
.chat
  .chat__userlist
    .userlist-settings.chat__userlist-settings
      a.link.link_chat.userlist-settings__link(
        href='settings'
      )
        | Профиль ⚡
      .search.userlist-settings__search(
        aria-label='🔭'
      )
        input.chat-input.chat-input_search.search__input(
          type='search'
          placeholder='Поиск'
        )
    .chat__userlist-users
      ul.chat__userlist-list
        each val in ${chats}
          li
            a.link(
              data-id=val.id
              href='chat-open'
            )
              .user.user_online.chat__user
                .user__current
                .user__avatar
                  img(
                    src='${avatar}'
                  )
                .user__contacts
                  .user__name #{val.title}
                  .user__message
                    | #{val.last_message}...
                .user__additional
                  .user__time 10:49
                  .user__messages-new #{val.unread_count}

  .chat__window.chat__window_empty
    | Выберите чат чтобы отправить сообщение
`
}

export { initTemplate }
