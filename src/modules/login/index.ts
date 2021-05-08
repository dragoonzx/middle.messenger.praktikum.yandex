import { Auth } from '../../api/index'
import { router } from '../../services/router/index'
import { logFormData, validationInitializer } from '../../utils/index'

const initLogin = (): void => {
  const form = document.querySelector('.form') as HTMLFormElement

  validationInitializer(
    form,
    '.form__field-input',
  )

  const anchor = document.querySelector('[data-router=registration]')
  anchor?.addEventListener('click', (event) => {
    event.preventDefault()
    router.go('/registration')
  })

  if (form) {
    form.addEventListener('submit', async () => {
      logFormData()

      if (!form.classList.contains('invalid')) {
        const formData = new FormData(form)
        const data = {
          'login': formData.get('login') as string,
          'password': formData.get('password') as string,
        }

        try {
          await Auth.signIn(data)
          router.go('/chat')
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
}

export {
  initLogin,
}
