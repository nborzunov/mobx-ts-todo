import React from 'react';
import {StoreContext} from "../store/store";
import {observer} from "mobx-react";

const ToDoFilter = () => {
    const store = React.useContext(StoreContext);

    return (
        <div className='filter'>
            <button onClick={() => store.changeFilter(0)}>all</button>
            <button onClick={() => store.changeFilter(1)}>uncompleted</button>
            <button onClick={() => store.changeFilter(2)}>done</button>
        </div>
    );
};

export default observer(ToDoFilter);
