import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private todos: Todo[] = [
        {id: 1, title: 'First thing', completed: true},
        {id: 2, title: 'Second thing', completed: false},
        {id: 3, title: 'Third thing', completed: true},
        {id: 4, title: 'Last thing', completed: true}
    ];

    public todos$: BehaviorSubject<Todo[]>;

    constructor() {
        this.todos$ = new BehaviorSubject(this.todos);
    }



    save(title: string) {
        this.todos.push({
            id: this.todos.length + 1,
            title: title,
            completed: false
        });

        this.todos$.next(this.todos);
    }
}
