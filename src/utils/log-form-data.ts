const logFormData = (
  fieldClass = '.form__field',
  inputClass = '.form__field-input',
): void => {
  const fieldsValues: Record<string, string> = {}
  const formFields = [...document.querySelectorAll(fieldClass)] as HTMLElement[]
  for (const field of formFields) {
    const formKey = field.dataset.formKey
    const fieldValue = (
      field.querySelector(inputClass) as HTMLInputElement
    )?.value

    if (formKey) {
      fieldsValues[formKey] = fieldValue
    }
  }

  // eslint-disable-next-line no-console
  console.log(fieldsValues)
}

export { logFormData }
