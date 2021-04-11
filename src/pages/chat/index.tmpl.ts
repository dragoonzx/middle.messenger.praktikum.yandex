/* eslint-disable max-len */
import avatar from 'url:../../../static/images/avatar.png'

const tmpl = `.chat
                .chat__userlist
                  .userlist-settings.chat__userlist-settings
                    a.link.link_chat.userlist-settings__link(
                      href='settings.html'
                    )
                      | Профиль ⚡
                    .search.userlist-settings__search(
                      aria-label='🔭'
                    )
                      input.chat-input.chat-input_search.search__input(
                        type='search'
                        placeholder='Поиск'
                      )
                  .chat__userlist-users
                    ul.chat__userlist-list
                      each val in [1, 2, 3, 4, 5, 6]
                        li
                          a.link(href='chat-open.html')
                            .user.user_online.chat__user
                              .user__current
                              .user__avatar
                                img(
                                  src='${avatar}'
                                )
                              .user__contacts
                                .user__name Андрей
                                .user__message
                                  | Друзья, у меня для вас особенный выпуск новостей!...
                              .user__additional
                                .user__time 10:49
                                .user__messages-new 2
                      each val in [7, 1, 1, 1, 1, 1]
                        li
                          .user.chat__user
                            .user__current
                            .user__avatar
                              img(
                                src='${avatar}'
                              )
                            .user__contacts
                              .user__name Андрей
                              .user__message
                                | Друзья, у меня для вас особенный выпуск новостей!...
                            .user__additional
                              .user__time 10:49
                              .user__messages-new 4

                .chat__window.chat__window_empty
                  | Выберите чат чтобы отправить сообщение
`

export { tmpl }
