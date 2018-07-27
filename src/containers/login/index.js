import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';

import Page from '../../components/layout';
import Form from './form/';

export default class Login extends Page {
    constructor() {
        super();
        this.state.title = 'Войти';
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline>
                    <Form />
                </CssBaseline>
            </React.Fragment>
        )
    }
}