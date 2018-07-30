import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Page from '../layout';
import styles from './404-styles';

class notFound extends Page {
    constructor() {
        super();
        this.state.title = '404 - страница не найдена';
    }
    content() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <h1>404</h1>
                <div>Страница не найдена</div>
            </div>
        );
    }
}

notFound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(notFound);