import React from 'react'
import { connect } from "react-redux"

import Page from '../../components/layout';
import Table from '../../components/ftps/table/';
import Preloader from '../../components/layout/preloader/';
import TopMenu from '../../components/layout/topmenu';
import { getFtps, deleteFtp } from './actions';

class Ftps extends Page {
    constructor() {
        super();
        this.state.title = 'Список доступов FTP';
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

    deleteItem = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.props.dispatch(deleteFtp(id))
    }

    content() {
        if (this.props.fetching) {
            return (
                <Preloader />
            )
        }

        if (this.props.ftps && this.props.ftps.length > 0) {
            return (
                <React.Fragment>
                    <Table items={this.props.ftps} onDelete={this.deleteItem}/>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <h2>Не было найдено записей, необходимо их добавить</h2>
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