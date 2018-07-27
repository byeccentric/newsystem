import React from 'react'
import { connect } from "react-redux"

import Page from '../../components/layout';
import Table from '../../components/ftps/table/';
import Preloader from '../../components/layout/preloader/';
import {getFtps} from './actions';

class Ftps extends Page {
    constructor() {
        super();
        this.state.title = 'ФТПСхи';
    }

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.dispatch(getFtps())
        }
    }

    content() {
        if (this.props.fetching) {
            return (
                <Preloader />
            )
        }
        return (
            <React.Fragment>
                <Table items={this.props.ftps} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    ftps: store.ftps.items,
    fetched: store.ftps.fetched,
    fetching: store.ftps.fetching,
    error: store.ftps.errorMsg
})

export default connect(mapStateToProps)(Ftps)