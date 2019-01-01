import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const baseUrl = 'api'; // https://jsonplaceholder.typicode.com

@Injectable({
    providedIn: 'root'
})

export class TodoService  {

    public todos$: BehaviorSubject<Todo[]>;

    constructor(private httpClient: HttpClient) {
        this.todos$ = new BehaviorSubject(null);
    }

    findAll() {
        this.httpClient.get<Todo[]>(`${baseUrl}/todos`)
            .subscribe(data => this.todos$.next(data));
    }


    save(title: string) {
         const todo = {
            id: undefined,
            title: title,
            completed: false
        };


        this.httpClient.post<Todo>(`${baseUrl}/todos`, todo, httpOptions)
            .subscribe(data => this.findAll()); // performances ??
    }

}
