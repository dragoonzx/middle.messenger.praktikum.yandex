(function () {
  const logFormData = window.mfUtils.logFormData

  const submitButton = document.querySelector('.popup__button')
  submitButton.addEventListener('click', () => {
    logFormData()
  })

})()
