import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Clipboard from "clipboard";

import styles from './table-styles';

class ftpRow extends Component {
    componentDidMount() {
        new Clipboard('.copyMe');
    }

    render() {
        const {id, name, login, password, server, classes} = this.props;

        const linkValue = "ftp://" + login + ':' + password + '@' + server;
        const infoValue = `${name}
Логин: ${login}
Пароль: ${password}
Сервер: ${server}
Ссылка: ftp://${login}:${password}@${server}`;

        return (
            <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell component="th" scope="row" numeric>{name}</TableCell>
                <TableCell numeric>{login}</TableCell>
                <TableCell numeric>{password}</TableCell>
                <TableCell numeric>{server}</TableCell>
                <TableCell className={classes.centered}>
                    <input type="text" id={"link" + id} className={classes.hidden} defaultValue={linkValue}/>
                    <textarea id={"dataid" + id} className={classes.hidden} defaultValue={infoValue}></textarea>
                    <Button className={classes.button + ' copyMe'} data-clipboard-target={"#link" + id}>Копировать ссылку</Button>
                    <Button className={classes.button + ' copyMe'} data-clipboard-target={"#dataid" + id}>Копировать данные</Button>
                </TableCell>
                <TableCell className={classes.centered}>
                    <Button color="primary" className={classes.button} to={'/ftps/edit/'+id} component={Link}>Изменить</Button>
                    <Button color="secondary" className={classes.button} data-id={id} onClick={this.props.onDelete.bind(id)}>Удалить</Button>
                </TableCell>
            </TableRow>
        );
    }
}

ftpRow.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    server: PropTypes.string.isRequired
};

export default withStyles(styles)(ftpRow);