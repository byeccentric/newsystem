import React from 'react'

import Page from '../../components/layout';
import Table from './table/';

export default class Ftps extends Page {
    constructor() {
        super();
        this.state.title = 'ФТПСхи';
    }

    content() {
        return (
            <React.Fragment>
                <Table />
            </React.Fragment>
        )
    }
}