/* eslint-disable max-len */
import image404 from '../../../static/images/404.png'

const tmpl = `
.page-404
  h1.page-404__header 404
  p.page-404__text Не туда попали
  a.link.link_success.page-404__link(
    href='chat'
  ) Назад к чатам
  img.page-404__bg-image(
    src='${image404}'
  )
`

export { tmpl }
