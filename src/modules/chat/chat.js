(function () {
  const MESSAGE_PROPERTY = 'message'

  const logFormData = () => {
    const fieldsValues = {}
    const messageField = document.querySelector('.message__input')
    fieldsValues[MESSAGE_PROPERTY] = messageField.value
    console.log(fieldsValues)
  }

  const submitButton = document.querySelector('.message__button')
  submitButton.addEventListener('click', () => {
    logFormData()
  })

})()
