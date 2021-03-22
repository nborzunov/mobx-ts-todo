import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {StoreContext} from "../store/store";
import {Box, Button, Input} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    container: {
        margin: '8px',
        padding: '8px',
        display: 'flex',
        columnGap: '16px'
    }
}));

const AddToDo = () => {
    const styles = useStyles();

    const store = React.useContext(StoreContext);

    const [text, setText] = useState('');

    const addTask = (event: React.MouseEvent) => {
        event.preventDefault();
        store.addToDo(text);
        setText('');
    };
    return (
        <Box >
            <form className={styles.container}>
                <Input
                    type="text"
                    placeholder='Print task'
                    color="secondary"
                    value={text}
                    onChange={(event) => setText(event.currentTarget.value)}
                />
                <Button
                    onClick={event => addTask(event)}
                    variant='contained'
                    color="secondary"
                >
                    <AddIcon/>
                    Add task
                </Button>

            </form>

        </Box>
    );
};

export default observer(AddToDo);
