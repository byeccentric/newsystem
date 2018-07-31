import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Menu from '../menu/';
import UserButtons from '../user/';

import styles from './appbar-styles';

function ButtonAppBar(props) {
    const { classes, title } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Menu/>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {title}
                    </Typography>
                    <UserButtons />
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(ButtonAppBar);