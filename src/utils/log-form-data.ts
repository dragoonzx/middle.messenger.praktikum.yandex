import { validationInitializer, VALIDATION_REGEX } from './validation'

type FormKeysTypes = keyof typeof VALIDATION_REGEX

const logFormData = (
  fieldClass = '.form__field',
  inputClass = '.form__field-input',
): void => {
  const form = document.querySelector('.form') as HTMLElement
  const fieldsValues: Record<string, string> = {}
  const formFields = [...document.querySelectorAll(fieldClass)] as HTMLElement[]
  for (const field of formFields) {
    const formKey: FormKeysTypes = field.dataset.formKey as FormKeysTypes
    const fieldNode = field.querySelector(inputClass) as HTMLInputElement

    const fieldValue = fieldNode?.value

    if (formKey) {
      validationInitializer(form, fieldNode, VALIDATION_REGEX[formKey])
      fieldsValues[formKey] = fieldValue
    }
  }

  // eslint-disable-next-line no-console
  console.log(fieldsValues)
}

export { logFormData }
