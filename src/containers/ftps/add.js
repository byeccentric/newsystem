import React from 'react'
import { connect } from "react-redux"

import Page from '../../components/layout';
import Form from '../../components/ftps/form/';
import TopMenu from '../../components/layout/topmenu';
import { addFtp, getFtps } from './actions';

class FtpsAdd extends Page {
    constructor() {
        super();
        this.state.title = 'ФТПСхи добавить';
    }

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.dispatch(getFtps())
        }
    }

    addFtp(event) {
        let data = {
            id: this.props.match.params.id
        };
        Array.from(event.target.querySelectorAll('input')).map(item => data[item.getAttribute('id')] = item.value);
        this.props.dispatch(addFtp(data));
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
        return (
            <React.Fragment>
                <Form onSubmit={this.addFtp.bind(this)}/>
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

export default connect(mapStateToProps)(FtpsAdd)