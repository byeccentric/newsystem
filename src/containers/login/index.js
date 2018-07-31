import React from 'react'

import Page from '../../components/layout';
import Form from '../../components/login/form/';

export default class Login extends Page {
    constructor() {
        super();
        this.state.title = 'Войти';
    }

    render() {
        return (
            <React.Fragment>
                <Form />
            </React.Fragment>
        )
    }
}