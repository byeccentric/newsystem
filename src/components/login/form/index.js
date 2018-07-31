import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Input, InputLabel, InputAdornment, FormControl,TextField } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

import styles from './form-styles';

function InputWithIcon(props) {
    const { classes } = props;

    return (
        <div className={classes.main}>
            <Typography variant="title" color="inherit">
                Войти
            </Typography>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Логин</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                type="password"
                label="Пароль"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                }}
            />
            <Button variant="contained" color="primary" className={classes.button}>
                Войти
            </Button>
        </div>
    );
}

InputWithIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);