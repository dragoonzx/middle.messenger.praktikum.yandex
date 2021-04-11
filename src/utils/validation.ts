/**
 * Добавьте валидацию на все формы
 * Валидация должна работать по focus/blur событиям
 * и второй раз проверяться при нажатии на submit.
 * Используйте регулярные выражения. У валидации должен быть единый механизм:
 */
const FORM_FIELD_INPUT_INVALID_CLASS = 'form__field-input_invalid'
const FORM_FIELD_INVALID = 'form__field_invalid'
const VALIDATION_EVENTS = ['blur', 'focus', 'submit']

const VALIDATION_REGEX = {
  'login': /.{6,}/u,
  'password': /.{3,}/u,
  'email': /^\S+@\S+\.\S+$/u,
  // eslint-disable-next-line max-len
  'phone': /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s-]?[0-9]{2}$/u,
  'password_repeat': /.{3,}/u,
}

const toggleFormFieldValidation = (
  formInput: HTMLInputElement,
  invalid: boolean,
): void => {
  if (invalid) {
    if (!formInput.classList.contains(FORM_FIELD_INPUT_INVALID_CLASS)) {
      formInput.parentElement?.classList.add(FORM_FIELD_INVALID)
      formInput.classList.add(FORM_FIELD_INPUT_INVALID_CLASS)
    }
  } else if (formInput.classList.contains(FORM_FIELD_INPUT_INVALID_CLASS)) {
    formInput.parentElement?.classList.remove(FORM_FIELD_INVALID)
    formInput.classList.remove(FORM_FIELD_INPUT_INVALID_CLASS)
  }
}

const validationInitializer = (
  form: HTMLElement,
  formInput: HTMLInputElement,
  validationExp: RegExp,
): void => {
  for (const event of VALIDATION_EVENTS) {
    let formElement: HTMLElement | HTMLInputElement = formInput
    if (event === 'submit') {
      formElement = form
    }

    formElement.addEventListener(event, () => {
      if (validationExp && !validationExp.test(formInput.value)) {
        console.log(formInput)
        toggleFormFieldValidation(formInput, true)
      } else {
        toggleFormFieldValidation(formInput, false)
      }
    })
  }
}

export {
  validationInitializer,
  VALIDATION_REGEX,
}
