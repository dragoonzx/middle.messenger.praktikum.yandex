
const tmpl = `.popup
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
                          type='file'
                        )
                      .form__field-avatar
                    button.button.button_primary.popup__button Поменять
`

export { tmpl }
