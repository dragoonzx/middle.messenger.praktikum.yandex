/* eslint-disable max-len */
import image500 from '../../../static/images/500.png'

const tmpl = `
.page-404
  h1.page-404__header 500
  p.page-404__text Мы уже фиксим
  a.link.link_success.page-404__link(
    href='chat'
  ) Назад к чатам
  img.page-404__bg-image(
    src='${image500}'
  )
`

export { tmpl }
