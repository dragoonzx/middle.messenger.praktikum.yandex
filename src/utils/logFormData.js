(function () {
  const logFormData = (fieldClass = '.form__field', inputClass = '.form__field-input') => {
    const fieldsValues = {}
    const formFields = Array.from(document.querySelectorAll(fieldClass))
    formFields.forEach(field => {
      const formKey = field.dataset.formKey
      const fieldValue = field.querySelector(inputClass).value
      fieldsValues[formKey] = fieldValue
    })
    console.log(fieldsValues)
  }

  window.mfUtils = { logFormData }
})()
