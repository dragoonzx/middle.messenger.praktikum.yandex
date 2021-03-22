(function () {
  const logFormData = window.mfUtils.logFormData

  const submitButton = document.querySelector('.settings__button')
  submitButton.addEventListener('click', () => {
    logFormData('.settings__list-item', '.chat-input')
  })

})()
