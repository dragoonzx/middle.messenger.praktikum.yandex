import avatarHigh from 'url:../../../static/images/avatar-high.png'

const fields = {
  'email': ['Почта', 'pochta@yandex.ru'],
  'login': ['Логин', 'ivanivanov'],
  'first_name': ['Имя', 'Иван'],
  'second_name': ['Фамилия', 'Иванов'],
  'display_name': ['Имя в чате', 'Иван'],
  'phone': ['Телефон', '+7 (909) 967 30 30'],
}

const tmpl = `.settings
                a.link(
                  href='settings-avatar.html'
                )
                  .settings__avatar(
                    aria-label='Поменять аватар'
                  )
                    img.settings__image(
                      src='${avatarHigh}'
                    )
                .settings__name Иван
                .settings__fields
                  form.form.settings__form(
                    onsubmit='return false'
                  )
                    ul.settings__list
                      each val, key in ${JSON.stringify(fields)}
                        li.settings__list-item(
                          data-form-key=key
                        )
                          span.list-item_main= val[0]
                          if val[1]
                            input.chat-input.list-item(
                              value=val[1]
                            )
                    button.button.button_primary.settings__button Сохранить
`

export { tmpl }
