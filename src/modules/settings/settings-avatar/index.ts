import { INPUT_FILE_FIELD, logSettingsFormData } from './settings-avatar'

document.addEventListener('DOMContentLoaded', () => {
  const inputAvatar = document.querySelector(INPUT_FILE_FIELD)

  if (inputAvatar) {
    inputAvatar.addEventListener('change', (fileChange: Event) => {
      const avatarNode =
        document.querySelector('.form__field-avatar') as HTMLElement
      const fileList = (fileChange.target as HTMLInputElement)?.files
      const fileValue = fileList ? fileList[0] : undefined
      if (avatarNode) {
        if (fileList && fileValue) {
          avatarNode.textContent = fileValue.name
          avatarNode.style.color = 'var(--color-warning)'
        } else {
          avatarNode.textContent = 'Нужно выбрать файл'
          avatarNode.style.color = 'var(--color-error)'
        }
      }
    })
  }
})

document.addEventListener('click', (event: Event) => {
  if (!(event.target as Element).closest('.popup__content')) {
    window.location =
        '/settings.html' as unknown as Location
  }
})

const form = document.querySelector('.form')

if (form) {
  form.addEventListener('submit', () => {
    logSettingsFormData()
  })
}