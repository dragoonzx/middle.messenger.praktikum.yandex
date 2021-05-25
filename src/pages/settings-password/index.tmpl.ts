import avatarHigh from '../../../static/images/avatar-high.png'

const fields = {
  'old_password': ['Старый пароль', '1234567'],
  'new_password': ['Новый пароль'],
  'repeat_password': ['Повторите пароль'],
}

const tmpl = `.settings
                .settings__avatar
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
                              type='password'
                              disabled
                            )
                          else
                            input.chat-input.list-item(
                              type='password'
                            )
                    button.button.button_primary.settings__button Сохранить
`

export { tmpl }
