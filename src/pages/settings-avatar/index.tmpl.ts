/* eslint-disable max-len */

const tmpl = `
.settings
  a.link(
    href='settings-avatar'
  )
    .settings__avatar(
      aria-label='Поменять аватар'
    )
      img.settings__image(
        src='images/avatar-high.png'
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
          href='/'
        )
          span.list-item_main Выйти

.popup
  .popup__content
    .popup__title Загрузите файл
    form.form.popup__form(
      onsubmit='return false'
    )
      each field, key in { avatar: 'Выбрать файл на компьютере' }
        label.form__field.form__field_file(
          data-form-key=key
        ) #{field}
          input.form__field-input.form__field-input_file(
            accept="image/*"
            type='file'
          )
        .form__field-avatar
      button.button.button_primary.popup__button Поменять
`

export { tmpl }
