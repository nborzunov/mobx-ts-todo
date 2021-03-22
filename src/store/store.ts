import {action, computed, makeAutoObservable, observable} from "mobx";
import {createContext} from "react";
import {IObservableArray} from "mobx/dist/types/observablearray";

export interface ToDoModel {
    id: number,
    title: string,
    completed: boolean,
    labels: Array<string>
}

class ToDoStore {
    constructor() {
        makeAutoObservable(this);
    };

    @observable todos: IObservableArray<ToDoModel> = observable([
        {id: 1, title: 'Do something', completed: false, labels: []},
        {id: 2, title: 'Do something else..', completed: true, labels: ['home']},
        {id: 3, title: 'Another task', completed: false, labels: ['school']},
    ]);

    next: number = 4;

    @observable filter: number = 0;

    @action addToDo(text: string) {
        this.todos.push({
            id: this.next,
            title: text,
            completed: false,
            labels: []
        });
        this.next++
    };

    @action removeToDo(todo: ToDoModel) {
        this.todos.remove(todo);
    };

    @action completeToDo(todo: ToDoModel) {
        todo.completed = !todo.completed;
    };

    @action changeFilter(filter: number){
        this.filter = filter;
    };

    @action addNewLabel(todo: ToDoModel, text: string | null){
        if(text) {
            todo.labels.push(text);
        }
    };

    @action removeLabel(todo: ToDoModel, label: string){
        todo.labels = todo.labels.filter(item => item !== label)
    }

    @computed get getFilteredList() {
        switch(this.filter){
            case 1:
                return this.todos.filter(todo => !todo.completed);
            case 2:
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }
}

export const StoreContext = createContext(new ToDoStore())


