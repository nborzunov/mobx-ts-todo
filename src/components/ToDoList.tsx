import React, {Fragment} from 'react';
import AddToDo from "./AddToDo";
import './style.css';
import {StoreContext, ToDoModel} from "../store/store";
import ToDoItem from "./ToDoItem";
import {observer} from "mobx-react";
import Filter from "./Filter";

const ToDoList = observer(() => {
    const store = React.useContext(StoreContext);

    return(
        <Fragment>
            <AddToDo/>
            <Filter/>
            <ToDosView todos={store.getFilteredList} />
        </Fragment>

    );
});

const ToDosView:React.FC<{ todos: ToDoModel[] }> = observer(({todos}) => {
    return(
        <ul>
            {todos.map((todo) => <ToDoItem todo={todo} key={todo.id}/>)}
        </ul>
    );
});

export default ToDoList