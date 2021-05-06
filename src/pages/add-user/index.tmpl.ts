/* eslint-disable max-len */

const tmpl = `
.chat
  .chat__userlist
    .userlist-settings.chat__userlist-settings
      a.link.link_chat.userlist-settings__link(
        href='settings'
      )
        | Профиль ⚡
      .search.userlist-settings__search
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
                src='images/avatar.png'
              )
            .user__contacts
              .user__name Андрей
              .user__message Друзья, у меня для вас особенный выпуск новостей!...
            .user__additional
              .user__time 10:49
              .user__messages-new 2
        each val in [1, 2, 3, 4, 5, 6]
          li
            .user.user_online.chat__user
              .user__current
              .user__avatar
                img(
                  src='images/avatar.png'
                )
              .user__contacts
                .user__name Андрей
                .user__message Друзья, у меня для вас особенный выпуск новостей!...
              .user__additional
                .user__time 10:49
                .user__messages-new 2
        each val in [7, 1, 1, 1, 1, 1]
          li
            .user.chat__user
              .user__current
              .user__avatar
                img(
                  src='images/avatar.png'
                )
              .user__contacts
                .user__name Андрей
                .user__message Друзья, у меня для вас особенный выпуск новостей!...
              .user__additional
                .user__time 10:49
                .user__messages-new 4

  .chat__window.chat__window_active
    .chat__settings-popup
      a.link.settings-popup__prop(
        href='add-user'
      )
        img.settings-popup__icon(
          src='images/icons/chat-add-user.png'
        )
        | Добавить пользователя
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='images/icons/chat-delete.png'
        )
        | Удалить чат
    .message__attachments-popup
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='images/icons/chat-photo.png'
        )
        | Фото или Видео
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='images/icons/chat-file.png'
        )
        | Файл
      a.link.settings-popup__prop
        img.settings-popup__icon(
          src='images/icons/chat-location.png'
        )
        | Локация
    .chat__user-info
      .user.user_top
        .user__avatar
          img.user__image_top(
            src='images/avatar.png'
          )
        .user__contacts
          .user__name Андрей
      .chat__settings
        img(
          src='images/icons/chat-top-menu.png'
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
            src='images/icons/chat-attach.png'
          )
        input.chat-input.message__input(
          type='text'
          placeholder='Сообщение'
        )
        .message__submit
          input.message__button(type='submit' value='🔥')
  .popup
    .popup__content
      .popup__title Добавить пользователя
      form.form.popup__form(
        onsubmit='return false'
      )
        each field, key in { login: 'Логин' }
          label.form__field(
            data-form-key=key
          ) #{field}
            input.form__field-input(
              type='text'
            )
        button.button.button_primary.popup__button
          | Добавить пользователя
`

export { tmpl }
