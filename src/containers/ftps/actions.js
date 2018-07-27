import { ftps } from "../../config/app"

let {FETCHED, FETCHING, FAIL} = ftps.commands;
let messages = ftps.messages;
let urls = ftps.urls;


export function editFtp(item) {
    return function(dispatch) {
        /*$.post(
            'http://test.byeccentric.pw/ajax.php', {
                mod: 'ftps',
                cmd: 'edit',
                type: item.type,
                id: item.id,
                name: item.name,
                login: item.login,
                password: item.password,
                server: item.server
            },
            function(data) {
                item.id = data.id;
                dispatcher.dispatch({
                    type: "CREATE_FTP",
                    data: item
                });
            },
            'json'
        );*/

        const type = item.type;

        if (type === 'add') {
            item.id = String(Math.round(Math.random() * 50));
        }
        delete item.type;

        dispatch({
            type: type.toUpperCase()+"_FTP",
            payload: item
        });

    }
}

export function deleteFtp(id) {
    return function(dispatch) {
        /*$.post(
            'http://test.byeccentric.pw/ajax.php', {
                mod: 'ftps',
                cmd: 'edit',
                type: 'delete',
                id
            },
            function() {
                dispatch({
                    type: "DELETE_FTP",
                    payload: id,
                });
            },
            'json'
        );*/

        dispatch({
            type: "DELETE_FTP",
            payload: id,
        });
    }
}

export function getFtps() {
    return function(dispatch) {
        dispatch({
            type: FETCHING
        })
        fetch(urls.request,
            {
                method: 'POST',
                /*headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },*/
                body: JSON.stringify({mod: 'ftps', cmd: 'get',})
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data)
                //if (data.status === 'ok') {
                dispatch({
                    type: FETCHED,
                    payload: data,
                })
                //} else {
                /*dispatch({
                    type: FAIL,
                    payload: errorMsg: messages[data.message],
                    },
                    error: true, // https://github.com/redux-utilities/flux-standard-action
                })
            //}*/
            })
            .catch(function(error) {
                dispatch({
                    type: FAIL,
                    payload: {
                        errorMsg: messages['network_error'],
                    },
                    error: true, // https://github.com/redux-utilities/flux-standard-action
                })
            })
    }
}
