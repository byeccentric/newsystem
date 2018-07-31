import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

import Ftp from './table-row';
import styles from './table-styles';

function FtpsTable(props) {
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
                        {props.items.map((n) => {
                            return (
                                <Ftp key={n.id} {...n} onDelete={props.onDelete}/>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

FtpsTable.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

export default withStyles(styles)(FtpsTable);