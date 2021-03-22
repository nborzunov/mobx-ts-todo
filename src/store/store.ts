import {action, computed, makeAutoObservable, observable} from "mobx";
import {createContext} from "react";
import {IObservableArray} from "mobx/dist/types/observablearray";

export interface ToDoModel {
    id: number,
    title: string,
    completed: boolean,
    createdDate: number
}

class ToDoStore {
    constructor() {
        makeAutoObservable(this);
    };

    @observable todos: IObservableArray<ToDoModel> = observable([
        {id: 1, title: 'Сходить афыаыф', completed: false, createdDate: 31314115},
        {id: 2, title: 'фыафа афыаыф', completed: true, createdDate: 43545543},
        {id: 3, title: 'афыафаррр афыаыф', completed: false, createdDate: 57775569},
    ]);

    next: number = 4;

    @observable filter: number = 0;

    @action addToDo(text: string) {
        this.todos.push({
            id: this.next,
            title: text,
            completed: false,
            createdDate: Date.now()
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


