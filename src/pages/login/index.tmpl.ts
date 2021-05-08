
import logo from 'url:../../../static/images/icons/logo-star.svg'
import jupyter from 'url:../../../static/images/jupyter.png'

import { Input } from '../../components/input/index'

const fields = {
  'login': ['Логин', 'Логин должен быть больше 6 символов'],
  'password': ['Пароль', 'Пароль должен быть больше 3-х символов'],
}

const tmpl = `.onboarding
                .logo.onboarding__logo
                  .logo__icon
                    img(
                      src='${logo}'
                    )
                  .logo__title
                    .logo__name SPACEHOUSE
                    .logo__description Cybernetically enhanced communication
                form.form.login.onboarding__form(
                  onsubmit='return false'
                )
                  .form__title Вход
                  .form__fields
                    each field, key in ${JSON.stringify(fields)}
                      label.form__field(
                        data-form-key=key
                        aria-label=field[1]
                      ) #{field[0]}
                        if key === 'password'
                          ${new Input('password')}
                        else
                          ${new Input('login')}
                  button.button.button_primary.form__button Авторизоваться
                a.link.link_main.onboarding__link(
                  data-router="registration"
                  href="registration"
                ) Нет аккаунта?
                img.onboarding__jupyter(
                  src='${jupyter}'
                )
`

export { tmpl }
