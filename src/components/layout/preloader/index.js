import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './preloader-styles';

class CircularDeterminate extends React.Component {
    constructor() {
        super();
        this.timer = null;

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    size={50}
                    value={this.state.completed}
                />
            </div>
        );
    }
}

CircularDeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularDeterminate);