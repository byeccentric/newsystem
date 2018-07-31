import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Tabs, Tab, Badge } from '@material-ui/core';

import Page from '../../components/layout';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 24
    },
    title: {
        fontSize: 14,
        marginBottom: 5
    },
    par: {
        padding: '20px 0'
    },
    padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
});

class PaperSheet extends Page {
    constructor() {
        super();
        this.state.value = 0;
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    content() {
        const {classes } = this.props;
        const {value} = this.state;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography className={classes.title} color="textSecondary">
                        {String(new Date())}
                    </Typography>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label={
                            <Badge className={classes.padding} color="secondary" badgeContent={4}>
                                Встречи и дела
                            </Badge>
                        } />
                        <Tab label="Планы" />
                    </Tabs>
                    { value === 0 && <Typography component="div" style={{ padding: 8 * 3 }}>
                        Item one
                    </Typography> }
                    { value === 1 && <Typography component="div" style={{ padding: 8 * 3 }}>
                        Item two
                    </Typography> }
                </Paper>
            </div>
        );
    }
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);