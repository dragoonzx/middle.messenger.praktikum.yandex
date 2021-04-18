
const tmpl = `.popup
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
