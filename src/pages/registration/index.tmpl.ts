import logo from 'url:../../../static/images/icons/logo-star.svg'
import jupyter from 'url:../../../static/images/jupyter.png'

import { Input } from '../../components/input/index'

const fields = {
  'email': ['Почта', 'Некорректная почта'],
  'login': ['Логин', 'Логин должен быть больше 6 символов'],
  'first_name': ['Имя', ''],
  'second_name': ['Фамилия', ''],
  'phone': ['Телефон', 'Некорректный телефон'],
  'password': ['Пароль', 'Пароль должен быть больше 3-х символов'],
  'password_repeat': [
    'Пароль (ещё раз)',
    'Пароль должен быть больше 3-х символов',
  ],
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
                  .form__title Регистрация
                  .form__fields
                    each field, key in ${JSON.stringify(fields)}
                      label.form__field(
                        data-form-key=key
                        aria-label=field[1]
                      ) #{field[0]}
                        if key === 'email'
                          ${new Input('email')}
                        else if key === 'phone'
                          ${new Input('tel')}
                        else if key === 'password' || key === 'password_repeat'
                          ${new Input('password')}
                        else
                          ${new Input()}
                  button.button.button_primary.form__button Зарегистрироваться
                a.link.link_main.onboarding__link(
                  href='index.html'
                ) Войти
                img.onboarding__jupyter(
                  src='${jupyter}'
                )
`

export { tmpl }
