import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    wrapper: {
        margin: '20px 0'
    },
    button: {
        margin: theme.spacing.unit,
    }
});

function TopMenu(props) {
    const {classes} = props;
    const Buttons = props.links.map((item,index)=> (<Button key={index} className={classes.button} component={Link} to={item.link}>{item.name}</Button>))
    return (
        <div className={classes.wrapper}>
            {Buttons}
        </div>
    )
}

TopMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    links: PropTypes.array.isRequired
};

export default withStyles(styles)(TopMenu);