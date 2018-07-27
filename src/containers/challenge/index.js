import React from 'react'

import Page from '../../components/layout';

export default class Ftps extends Page {
    constructor() {
        super();
        this.state.title = 'CHLGS';
    }

    content() {
        return (
            <React.Fragment>
                <h2>CHALLANGES</h2>
            </React.Fragment>
        )
    }
}