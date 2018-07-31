import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Button, Snackbar, IconButton, Typography}  from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

import Input from './input';
import styles from './form-styles';

class form extends Component {
    constructor(props) {
        super();
        this.state = {
            open: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        let oldData = JSON.parse(JSON.stringify(this.props));
        let data = {};
        Array.from(event.target.querySelectorAll('input')).forEach(item => data[item.getAttribute('id')] = item.value);
        this.props.onSubmit(data);
        this.setState({
            open: true,
            oldData: oldData
        });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    handleUndo() {
        this.props.onSubmit(this.state.oldData);
        this.handleClose()
    }

    render() {
        let {classes, name, login, password, server} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                <Typography variant="title" color="inherit">
                    {name || 'Добавить'}
                </Typography>
                <Input className={classes.textField} value={name} type="name" label="Название"/>
                <Input className={classes.textField} value={login} type="login" label="Логин"/>
                <Input className={classes.textField} value={password} type="password" label="Пароль"/>
                <Input className={classes.textField} value={server} type="server" label="Сервер"/>
                <Button variant="contained" type="submit" color="primary" className={classes.button}>
                    {this.props.name ? 'Изменить' : 'Добавить'}
                </Button>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">FTP {this.props.name ? 'Изменен' : 'Добавлен'}</span>}
                    action={[
                        this.props.name && (<Button key="undo" color="secondary" size="small" onClick={this.handleUndo.bind(this)}>
                            Отменить
                        </Button>),
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </form>
        )
    }
}

form.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string,
    server: PropTypes.string,
    onSubmit: PropTypes.func.isRequired

};

export default withStyles(styles)(form);



