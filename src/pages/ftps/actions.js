import ftps from './config'

const { FETCHED, FETCHING, ADD, EDIT, DELETE } = ftps.commands
/*const { messages, urls } = ftps.messages;*/

export function addFtp(item) {
  return function(dispatch) {
    dispatch({
      type: ADD,
      payload: item,
    })
  }
}

export function editFtp(item) {
  return function(dispatch) {
    dispatch({
      type: EDIT,
      payload: item,
    })
  }
}

export function deleteFtp(id) {
  return function(dispatch) {
    dispatch({
      type: DELETE,
      payload: id,
    })
  }
}

export function getFtps() {
  return function(dispatch) {
    dispatch({
      type: FETCHING,
    })

    setTimeout(function() {
      let data = [
        {
          id: 1,
          name: 'FTPS #1',
          login: 'login_ftp1',
          password: 'password',
          server: 'localhost',
          type: 'ftp',
        },
        {
          id: 2,
          name: 'FTPS #2',
          login: 'login_ftp2',
          password: 'password',
          server: 'localhost',
          type: 'ftp',
        },
        {
          id: 3,
          name: 'FTPS #3',
          login: 'login_ftp1',
          password: 'password',
          server: 'localhost',
          type: 'ftp',
        },
      ]
      dispatch({
        type: FETCHED,
        payload: data,
      })
    }, 1000)
  }
}
