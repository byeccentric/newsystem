import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Ftp from './table-row';
import styles from './table-styles';

function SimpleTable(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell numeric>название</TableCell>
                            <TableCell numeric>login</TableCell>
                            <TableCell numeric>pass</TableCell>
                            <TableCell numeric>server</TableCell>
                            <TableCell className={classes.centered}>ссылки</TableCell>
                            <TableCell className={classes.centered}>управление</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.items.map((n,i) => {
                            return (
                                <Ftp key={i} {...n} />
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);