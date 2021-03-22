import React from 'react';
import {StoreContext} from "../store/store";
import {observer} from "mobx-react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Checkbox, IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import {Add as AddIcon} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '8px 0',
        paddingLeft: '12px',
        borderRadius: '16px',
        backgroundColor: '#E5E7EB',
        lineHeight: '1em'
    },
    item: {
        backgroundColor: '#F3F4F6'
    },
    cell: {
        verticalAlign: 'top',
        lineHeight: '4em'
    }

}));

const ToDoItem:React.FC<{ todo: any }> = ({todo}) => {
    const styles = useStyles();

    const store = React.useContext(StoreContext);

    function addLabel(){
        let text: string | null = window.prompt(`Add new label to task ${todo.title} `)
        store.addNewLabel(todo, text)
    }

    function removeLabel(label: string){
        store.removeLabel(todo, label)
    }

    return (
        <TableRow className={styles.item}>
           <TableCell align='center' className={styles.cell}>
               <Checkbox
                   checked={todo.completed}
                   onChange={() => store.completeToDo(todo)}
               />
           </TableCell>

            <TableCell className={styles.cell}>
                {todo.title}
            </TableCell>

            <TableCell className={styles.cell}>
                {todo.labels.map((label: string, index: number) => (
                    <div key={index} className={styles.label}>

                        <div>{label}</div>

                        <IconButton
                            aria-label="delete"
                            onClick={() => removeLabel(label)}
                            size="small">
                            <RemoveIcon />
                        </IconButton>
                    </div>
                ))}
                <Button
                    aria-label="delete"
                    onClick={() => addLabel()}
                    size="small">
                    <AddIcon />
                    Add label
                </Button>

            </TableCell>

            <TableCell align='center' className={styles.cell}>
                <IconButton
                    aria-label="delete"
                    onClick={() => store.removeToDo(todo)}
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default observer(ToDoItem);





