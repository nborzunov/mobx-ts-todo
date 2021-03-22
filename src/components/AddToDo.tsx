import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {StoreContext} from "../store/store";


const AddToDo = () => {
    const store = React.useContext(StoreContext);

    const [text, setText] = useState('');

    const addTask = (event: React.MouseEvent) => {
        event.preventDefault();
        store.addToDo(text);
        setText('');
    };
    return (
        <div>
            <input
                type="text"
                placeholder='Print task'
                value={text}
                onChange={(event) => setText(event.currentTarget.value)}
            />
            <button onClick={event => addTask(event)}>Add task</button>
        </div>
    );
};

export default observer(AddToDo);
