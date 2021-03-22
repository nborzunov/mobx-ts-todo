import React from 'react';
import {StoreContext} from "../store/store";
import {observer} from "mobx-react";



const ToDoItem:React.FC<{ todo: any }> = ({todo}) => {
    const store = React.useContext(StoreContext);
    return (
        <tr>
           <td>
               <input
                   type='checkbox'
                   checked={todo.completed}
                   onChange={() => store.completeToDo(todo)}
               />
           </td>
            <td>
                {todo.title}
            </td>
            <td>
                <button onClick={() => store.removeToDo(todo)}>X</button>
            </td>
        </tr>
    );
};

export default observer(ToDoItem);





