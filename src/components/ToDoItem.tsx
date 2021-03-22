import React from 'react';
import {StoreContext} from "../store/store";
import {observer} from "mobx-react";



const ToDoItem:React.FC<{ todo: any }> = ({todo}) => {
    const store = React.useContext(StoreContext);
    console.log('fsafa')
    return (
        <li className='todo'>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => store.completeToDo(todo)}
            />
            <span>{todo.title}</span>
            <button onClick={() => store.removeToDo(todo)}>X</button>
        </li>
    );
};

export default observer(ToDoItem);





