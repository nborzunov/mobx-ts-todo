import React, {Fragment} from 'react';
import AddToDo from "./AddToDo";
import './style.css';
import {StoreContext, ToDoModel} from "../store/store";
import ToDoItem from "./ToDoItem";
import {observer} from "mobx-react";
import Filter from "./Filter";
import Table from "./Table";

const ToDoList = observer(() => {
    const store = React.useContext(StoreContext);

    return(
        <Fragment>
            <Filter/>
            <Table>
                <ToDosView todos={store.getFilteredList} />
            </Table>
            <AddToDo/>
        </Fragment>

    );
});

const ToDosView:React.FC<{ todos: ToDoModel[] }> = observer(({todos}) => {
    return(
        <>
            {todos.map((todo) => <ToDoItem todo={todo} key={todo.id}/>)}
        </>
    );
});

export default ToDoList