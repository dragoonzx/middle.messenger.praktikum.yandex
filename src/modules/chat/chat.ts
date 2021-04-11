
const MESSAGE_PROPERTY = 'message'

const logChatFormData = (): void => {
  const fieldsValues: Record<string, string> = {}
  const messageField =
    document.querySelector('.message__input') as HTMLInputElement

  fieldsValues[MESSAGE_PROPERTY] = messageField.value

  // eslint-disable-next-line no-console
  console.log(fieldsValues)
}

const chatSubmitButton = document.querySelector('.message__button')

if (chatSubmitButton) {
  chatSubmitButton.addEventListener('click', () => {
    logChatFormData()
  })
}
