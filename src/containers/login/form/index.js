import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    button: {
        marginTop: '20px'
    }
});

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
                label="Пароль"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
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