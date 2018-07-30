import React from 'react'
import { connect } from "react-redux"

import Page from '../../components/layout';
import Preloader from '../../components/layout/preloader/';
import Form from '../../components/ftps/form/';
import TopMenu from '../../components/layout/topmenu';
import {getFtps, editFtp} from './actions';

class FtpsEdit extends Page {
    constructor() {
        super();
        this.state.title = 'ФТПСхи редактировать';

    }

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.dispatch(getFtps())
        }
    }

    changeFtp(event) {
        let data = {
            id: this.props.match.params.id
        };
        Array.from(event.target.querySelectorAll('input')).map(item => data[item.getAttribute('id')] = item.value);
        this.props.dispatch(editFtp(data));
    }

    topMenu() {
        const links = [
            {
                name: 'К списку',
                link: '/ftps'
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
        let editItem = this.props.ftps.filter(item => item.id === this.props.match.params.id);
        if (editItem.length > 0) {
            editItem = editItem[0];
            return (
                <React.Fragment>
                    <Form name={editItem.name} item={editItem} onSubmit={this.changeFtp.bind(this)} />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <h2>Нихуя не нашел</h2>
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

export default connect(mapStateToProps)(FtpsEdit)