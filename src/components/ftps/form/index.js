import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'

import styles from './form-styles';

class form extends Component {
    constructor(props) {
        super();
        props.item ?
            this.state = {
                ...props.item,
                open: false
            } :
            this.state = {
                name: '',
                login: '',
                password: '',
                server: '',
                open: false
            };
    }

    handleChange = () => event => {
        this.setState({
            [event.target.getAttribute('id')]: event.target.value,
        });
    };

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(event);
        this.setState({
            open: true
        });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const {classes} = this.props;
        let item = this.state;
        return (
            <form action="/ftps" className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                <h2>{this.props.name || 'Добавить'}</h2>
                <TextField
                    id="name"
                    label="Название"
                    className={classes.textField}
                    value={item.name}
                    onChange={this.handleChange()}
                    margin="normal"
                />
                <TextField
                    id="login"
                    label="Логин"
                    className={classes.textField}
                    value={item.login}
                    onChange={this.handleChange()}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Пароль"
                    className={classes.textField}
                    value={item.password}
                    onChange={this.handleChange()}
                    margin="normal"
                />
                <TextField
                    id="server"
                    label="Сервер"
                    className={classes.textField}
                    value={item.server}
                    onChange={this.handleChange()}
                    margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button} component={"Button"}>
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
};

export default withStyles(styles)(form);



