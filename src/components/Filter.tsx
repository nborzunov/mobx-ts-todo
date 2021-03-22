import React from 'react';
import {StoreContext} from "../store/store";
import {observer} from "mobx-react";
import {Button} from "@material-ui/core";

const ToDoFilter = () => {
    const store = React.useContext(StoreContext);

    return (
        <div className='filter'>
            <Button
                onClick={() => store.changeFilter(0)}
                variant="contained"
                color="secondary"
            >
                All
            </Button>
            <Button
                onClick={() => store.changeFilter(1)}
                variant="contained"
                color="secondary"
            >
                Uncompleted
            </Button>
            <Button
                onClick={() => store.changeFilter(2)}
                variant="contained"
                color="secondary"
            >
                Done
            </Button>
        </div>
    );
};

export default observer(ToDoFilter);
