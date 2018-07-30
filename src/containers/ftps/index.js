import React from 'react'
import { connect } from "react-redux"

import Page from '../../components/layout';
import Table from '../../components/ftps/table/';
import Preloader from '../../components/layout/preloader/';
import TopMenu from '../../components/layout/topmenu';
import {getFtps} from './actions';

class Ftps extends Page {
    constructor() {
        super();
        this.state.title = 'ФТПСки';
    }

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.dispatch(getFtps())
        }
    }

    topMenu() {
        const links = [
            {
                name: 'Добавить',
                link: '/ftps/add'
            }
        ];

        return (
            <TopMenu links={links}/>
        )
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