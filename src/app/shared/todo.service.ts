import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService  {

    baseUrl = 'api'; // https://jsonplaceholder.typicode.com

    private todos: Todo[] = [
        {id: 1, title: 'First thing', completed: true},
        {id: 2, title: 'Second thing', completed: false},
        {id: 3, title: 'Third thing', completed: true},
        {id: 4, title: 'Last thing', completed: true}
    ];

    public todos$: BehaviorSubject<Todo[]>;

    constructor(private httpClient: HttpClient) {
        this.todos$ = new BehaviorSubject(null);
    }

    findAll() {
        this.httpClient.get<Todo[]>(`${this.baseUrl}/todos`)
            .subscribe(data => this.todos$.next(data));
    }


    save(title: string) {
        this.todos.push({
            id: this.todos.length + 1,
            title: title,
            completed: false
        });
        /*
        this.httpClient.put<Todo>(``,{
            id: this.todos.length + 1,
            title: title,
            completed: false
        })
*/
        this.todos$.next(this.todos);
    }

}
