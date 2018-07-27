import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

function LinkButton(props) {
    const { classes, value, onClick, color, variant } = props;
    return (
        <Button color={ color } variant={variant} className={classes.button} onClick={onClick}>
            {value}
        </Button>
    );
}

LinkButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinkButton);