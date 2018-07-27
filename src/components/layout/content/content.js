import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './content-styles';

function Content(props) {
    let {classes, children} = props;

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);