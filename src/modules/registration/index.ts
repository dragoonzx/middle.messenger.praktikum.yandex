import { logFormData, validationInitializer } from '../../utils/index'

const form = document.querySelector('.form') as HTMLFormElement

validationInitializer(
  form,
  '.form__field-input',
)

if (form) {
  form.addEventListener('submit', () => {
    logFormData()

    if (!form.classList.contains('invalid')) {
      window.location =
        '/chat.html' as unknown as Location
    }
  })
}
