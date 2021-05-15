import { Auth } from '../../../api/index'
import { router } from '../../../services/router/index'
import { logFormData, validationInitializer } from '../../../utils/index'

const initSettingsData = (): void => {
  window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form') as HTMLFormElement

    if (form) {
      validationInitializer(
        form,
        '.chat-input',
      )
    }

    if (form) {
      form.addEventListener('submit', () => {
        logFormData('.settings__list-item', '.chat-input')
      })
    }

    const logout =
      document.querySelector('[data-router=logout]') as HTMLFormElement

    if (logout) {
      logout.addEventListener('click', async (event) => {
        event.preventDefault()
        try {
          await Auth.logout()
          router.go('/login')
        } catch (error) {
          console.log(error)
        }
      })
    }
  })
}

export {
  initSettingsData,
}
