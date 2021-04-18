/**
 * Добавьте валидацию на все формы
 * Валидация должна работать по focus/blur событиям
 * и второй раз проверяться при нажатии на submit.
 * Используйте регулярные выражения. У валидации должен быть единый механизм:
 */
const FORM_FIELD_INPUT_INVALID_CLASS = 'form__field-input_invalid'
const FORM_FIELD_INVALID = 'form__field_invalid'
const VALIDATION_EVENTS = ['blur', 'focus', 'submit'] as const

const VALIDATION_REGEX = {
  'login': /.{6,}/u,
  'password': /.{3,}/u,
  'email': /^\S+@\S+\.\S+$/u,
  // eslint-disable-next-line max-len
  'phone': /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s-]?[0-9]{2}$/u,
  'password_repeat': /.{3,}/u,
}

type ValidationRules = typeof VALIDATION_REGEX[keyof typeof VALIDATION_REGEX]

const toggleFormFieldValidation = (
  formInput: HTMLInputElement,
  invalid: boolean,
): void => {
  formInput.parentElement?.classList.toggle(FORM_FIELD_INVALID, invalid)
  formInput.classList.toggle(FORM_FIELD_INPUT_INVALID_CLASS, invalid)
}

const toggleFormValidation = (
  form: HTMLFormElement | undefined,
  invalid: boolean,
): void => {
  if (form) {
    form.classList.toggle('invalid', invalid)
  }
}

const checkValidation = (
  formInput: HTMLInputElement,
  validationExp: RegExp,
  form?: HTMLFormElement,
): void => {
  if (validationExp && !validationExp.test(formInput.value)) {
    toggleFormFieldValidation(formInput, true)
    toggleFormValidation(form, true)
  } else {
    toggleFormFieldValidation(formInput, false)
    toggleFormValidation(form, false)
  }
}

const getValidationExp = (input: HTMLInputElement): ValidationRules => {
  return VALIDATION_REGEX[
    (input.parentElement?.dataset.formKey ?? '') as
      keyof typeof VALIDATION_REGEX
  ]
}

const addValidationListeners = (
  event: typeof VALIDATION_EVENTS[number],
  formElement: HTMLFormElement | HTMLInputElement,
  formInputs: HTMLInputElement[] | HTMLInputElement,
  validationExp?: RegExp,
): void => {
  formElement.addEventListener(event, () => {
    if (event === 'submit' && Array.isArray(formInputs)) {
      for (const input of formInputs) {
        validationExp = getValidationExp(input)
        checkValidation(input, validationExp, formElement as HTMLFormElement)
      }
    } else if (!Array.isArray(formInputs) && validationExp) {
      checkValidation(formInputs, validationExp)
    }
  })
}

const validationInitializer = (
  form: HTMLFormElement,
  formInputClass: string,
): void => {
  for (const event of VALIDATION_EVENTS) {
    const formInputs =
      [...document.querySelectorAll(formInputClass)] as HTMLInputElement[]

    if (event === 'submit') {
      addValidationListeners(event, form, formInputs)
    } else {
      for (const input of formInputs) {
        const validationExp = getValidationExp(input)
        addValidationListeners(event, input, input, validationExp)
      }
    }
  }
}

export {
  validationInitializer,
  VALIDATION_REGEX,
}
