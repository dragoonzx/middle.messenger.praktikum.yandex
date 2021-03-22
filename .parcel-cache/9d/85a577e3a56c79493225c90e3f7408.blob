(function () {
  const logFormData = () => {
    const fieldsValues = {}
    const formFields = document.querySelectorAll('.form__field')
    formFields.forEach(field => {
      const formKey = field.dataset.formKey
      const fieldNode = field.querySelector('.form__field-input_file')
      console.log(fieldNode)
      if (fieldNode.files[0]) {
        const fieldValue = field.querySelector('.form__field-input_file').files[0].name
        fieldsValues[formKey] = fieldValue
      } else {
        const avatarNode = document.querySelector('.form__field-avatar')
        avatarNode.textContent = 'Нужно выбрать файл'
        avatarNode.style = 'color: var(--color-error)'
      }
    })
    console.log(fieldsValues)
  }

  document.addEventListener('DOMContentLoaded', () => {
    const inputAvatar = document.querySelector('.form__field-input_file')

    inputAvatar.addEventListener('change', (e) => {
      const avatarNode = document.querySelector('.form__field-avatar')
      if (e.target.files[0]) {
        avatarNode.textContent = e.target.files[0].name
        avatarNode.style = 'color: var(--color-warning)'
      } else {
        avatarNode.textContent = 'Нужно выбрать файл'
        avatarNode.style = 'color: var(--color-error)'
      }
    })
  })

  const submitButton = document.querySelector('.popup__button')
  submitButton.addEventListener('click', () => {
    logFormData()
  })

})()
