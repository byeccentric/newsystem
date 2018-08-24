import React from 'react'
import { connect } from 'react-redux'

import Page from '../../../components/layout'
import Table from '../components/table/'
import AddComponent from '../components/add/'
import EditComponent from '../components/edit/'
import Preloader from '../../../components/layout/preloader/'
import TopMenu from '../../../components/layout/topmenu'
import { getFtps, deleteFtp, addFtp, editFtp } from '../actions'

class Ftps extends Page {
    constructor() {
        super()
        this.state.title = 'Список доступов FTP'
        this.state.command = 'table'

        this.links = {
            table: [
                {
                    name: 'Добавить',
                    onClick: e =>
                        this.changeCommand(e, 'add', 'Добавить доступ FTP'),
                },
            ],
            edit: [
                {
                    name: 'К списку',
                    onClick: e =>
                        this.changeCommand(e, 'table', 'Список доступов FTP'),
                },
            ],
            add: [
                {
                    name: 'К списку',
                    onClick: e =>
                        this.changeCommand(e, 'table', 'Список доступов FTP'),
                },
            ],
        }
    }

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.dispatch(getFtps())
        }
    }

    topMenu() {
        return <TopMenu links={this.links[this.state.command]} />
    }

    changeCommand = (e, command, title, id) => {
        e.preventDefault()
        this.setState({
            command,
            title,
            id,
        })
    }

    deleteItem = id => {
        this.props.dispatch(deleteFtp(id))
    }

    addFtpItem = data => {
        this.props.dispatch(addFtp(data))
    }

    editFtpItem = data => {
        data.id = this.state.id
        this.props.dispatch(editFtp(data))
    }

    content() {
        const { command } = this.state
        return this[command]()
    }

    table() {
        if (this.props.fetching) {
            return <Preloader />
        }

        if (this.props.ftps && this.props.ftps.length > 0) {
            return (
                <React.Fragment>
                    <Table
                        items={this.props.ftps}
                        onDelete={this.deleteItem}
                        onEdit={(e, id) =>
                            this.changeCommand(
                                e,
                                'edit',
                                'Редактировать доступ FTP',
                                id
                            )
                        }
                    />
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <h2>Не было найдено записей, необходимо их добавить</h2>
            </React.Fragment>
        )
    }

    add() {
        return <AddComponent onAddFtp={this.addFtpItem.bind(this)} />
    }

    edit() {
        let item = this.props.ftps.filter(item => item.id === this.state.id)[0]
        return (
            <EditComponent {...item} onSubmit={this.editFtpItem.bind(this)} />
        )
    }
}

const mapStateToProps = store => ({
    ftps: store.ftps.items,
    fetched: store.ftps.fetched,
    fetching: store.ftps.fetching,
    error: store.ftps.errorMsg,
})

export default connect(mapStateToProps)(Ftps)
