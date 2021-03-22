import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    table: {
        minWidth: '720px'
    },
    tableHead: {
        backgroundColor: '#374151',

    },
    tableRow: {
        color: 'white',
        '& > *': {
            color: 'white'
        }
    }
}));

const TableView:React.FC = ({children}) => {
    const styles = useStyles();

    return (
        <Table className={styles.table}>
            <TableHead className={styles.tableHead}>
                <TableRow className={styles.tableRow}>
                    <TableCell align='center'>Checked</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>Labels</TableCell>
                    <TableCell align='center'>Remove</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {children}
            </TableBody>
        </Table>
    );
};

export default TableView;
