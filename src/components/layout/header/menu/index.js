import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { routes } from '../../../../config/routes';

import styles from './menu-styles';

class MenuAppBar extends React.Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
        };
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const MenuItems = routes.filter(i => i.menu)
            .map(item => (
                <MenuItem key={item.name} onClick={this.handleClose} component={Link} to={item.path}>{item.name}</MenuItem>
            ))

        return (
            <React.Fragment>
                <IconButton
                    aria-owns={open ? 'menu-aa' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                    className={classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-aa"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    {MenuItems}
                </Menu>
            </React.Fragment>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);