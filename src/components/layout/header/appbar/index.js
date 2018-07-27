import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Conponents
import Menu from '../menu/';
import UserButtons from '../user/';

// Jss
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
};

export default withStyles(styles)(ButtonAppBar);