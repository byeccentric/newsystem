const APInewUrl = 'http://test.byeccentric.pw/ajax.php'

const ftps = {
  pageName: 'ftps',
  commands: {
    FETCHED: 'FTPS_FETCHED',
    FETCHING: 'FTPS_FETCHING',
    FAIL: 'FTPS_REJECTED',
    ADD: 'FTPS_ADDED',
    EDIT: 'FTPS_EDITED',
    DELETE: 'FTPS_DELETED',
  },
  messages: {
    wrong_email_or_password: 'Некорректно введен логин или пароль',
    not_correct: 'Некорректно введен логин или пароль',
    network_error: 'Что-то пошло не так',
    default: 'Что-то пошло не так',
  },
  urls: {
    request: APInewUrl,
  },
}

export default ftps
