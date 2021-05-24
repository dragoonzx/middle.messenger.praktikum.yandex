/* eslint-disable max-len */
import avatar from '../../../static/images/avatar.png'
import addUser from '../../../static/images/icons/chat-add-user.png'
import chatAttach from '../../../static/images/icons/chat-attach.png'
import deleteChat from '../../../static/images/icons/chat-delete.png'
import fileChat from '../../../static/images/icons/chat-file.png'
import location from '../../../static/images/icons/chat-location.png'
import photo from '../../../static/images/icons/chat-photo.png'
import topMenu from '../../../static/images/icons/chat-top-menu.png'

const initTemplate = async (): Promise<string> => {
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
        li
          .user.chat__user
            .user__current.active
            .user__avatar
              img(
                src='${avatar}'
              )
            .user__contacts
              .user__name #{chat.title}
              .user__message #{chat.last_message}
            .user__additional
              .user__time 10:49
              .user__messages-new #{chat.unread_count}

  .chat__window.chat__window_active
    .chat__settings-popup
      a.link.settings-popup__prop(
        href='add-user'
      )
        img.settings-popup__icon(
          src='${addUser}'
        )
        | Добавить пользователя
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='${deleteChat}'
        )
        | Удалить чат
    .message__attachments-popup
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='${photo}'
        )
        | Фото или Видео
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='${fileChat}'
        )
        | Файл
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='${location}'
        )
        | Локация
    .chat__user-info
      .user.user_top
        .user__avatar
          img.user__image_top(
            src='${avatar}'
          )
        .user__contacts
          .user__name Андрей
      .chat__settings
        img(
          src='${topMenu}'
        )
    .chat__dialog
      .dialog__date 19 июня
      .dialog__messages
        .message.message_opposite
          .message__content
            | Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
          .message__time
            | 11:56
        .message.message_ours
          .message__content
            | Круто!
          .message__time.message__time_ours
            | 11:56
    .chat__actions
      form.message__form(
        onsubmit='return false'
      )
        .message__attach
          img(
            src='${chatAttach}'
          )
        input.chat-input.message__input(
          type='text'
          name="message"
          placeholder='Сообщение'
        )
        .message__submit
          input.message__button(type='submit' value='🔥')
`
}
export { initTemplate }
