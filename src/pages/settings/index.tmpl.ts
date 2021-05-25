/* eslint-disable max-len */
import avatarHigh from '../../../static/images/avatar-high.png'

const tmpl = `
.settings
  a.link(
    href='settings-avatar'
  )
    .settings__avatar(
      aria-label='Поменять аватар'
    )
      img.settings__image(
        src='${avatarHigh}'
      )
  .settings__name Иван
  .settings__fields
    ul.settings__list
      each val, key in { email: ['Почта', 'pochta@yandex.ru'], login: ['Логин', 'ivanivanov'], first_name: ['Имя', 'Иван'], second_name: ['Фамилия', 'Иванов'], display_name: ['Имя в чате', 'Иван'], phone: ['Телефон', '+7 (909) 967 30 30'] }
        li.settings__list-item
          span.list-item_main= val[0]
          span.list-item= val[1]
  .settings__fields
    ul.settings__list
      li.settings__list-item
        a.link.link_success(
          href='settings-data'
        )
          span.list-item_main Изменить данные
      li.settings__list-item
        a.link.link_success(
          href='settings-password'
        )
          span.list-item_main Изменить пароль
      li.settings__list-item
        a.link.link_warning(
          data-router="logout"
          href='/'
        )
          span.list-item_main Выйти
`

export { tmpl }
