const INPUT_FILE_FIELD = '.form__field-input_file'

const getAvatarName = (fieldNode: HTMLInputElement): string => {
  return fieldNode.files ? fieldNode.files[0].name : ''
}

const missingAvatarError = (): void => {
  const avatarNode =
    document.querySelector('.form__field-avatar') as HTMLElement

  if (avatarNode) {
    avatarNode.textContent = 'Нужно выбрать файл'
    avatarNode.style.color = 'var(--color-error)'
  }
}

const logSettingsFormData = (): void => {
  const fieldsValues: Record<string, string> = {}
  const formFields =
    [...document.querySelectorAll('.form__field')] as HTMLElement[]
  for (const field of formFields) {
    const formKey = field.dataset.formKey
    const fieldNode = field.querySelector(INPUT_FILE_FIELD) as HTMLInputElement

    if (fieldNode && fieldNode.files && fieldNode.files[0]) {
      const avatarName = getAvatarName(fieldNode)
      fieldsValues[formKey ?? ''] = avatarName
    } else {
      missingAvatarError()
    }
  }

  // eslint-disable-next-line no-console
  console.log(fieldsValues)
}

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

const settingsSubmitButton = document.querySelector('.popup__button')

if (settingsSubmitButton) {
  settingsSubmitButton.addEventListener('click', () => {
    logSettingsFormData()
  })
}
