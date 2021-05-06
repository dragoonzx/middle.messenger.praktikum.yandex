import { Auth } from '../../api/index'
import { router } from '../../services/router/index'
import { logFormData, validationInitializer } from '../../utils/index'

const initRegistration = (): void => {
  const form = document.querySelector('.form') as HTMLFormElement

  validationInitializer(
    form,
    '.form__field-input',
  )

  const anchor = document.querySelector('[data-router=login]')
  anchor?.addEventListener('click', (event) => {
    event.preventDefault()
    router.go('/login')
  })

  if (form) {
    form.addEventListener('submit', async () => {
      logFormData()

      if (!form.classList.contains('invalid')) {
        const formData = new FormData(form)
        const data = {
          'login': formData.get('login') as string,
          'password': formData.get('password') as string,
          'first_name': formData.get('first_name') as string,
          'second_name': formData.get('second_name') as string,
          'email': formData.get('email') as string,
          'phone': formData.get('phone') as string,
        }

        try {
          await Auth.signUp(data)
          router.go('/chat')
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
}

export {
  initRegistration,
}
