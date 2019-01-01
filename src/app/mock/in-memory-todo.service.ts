import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Todo} from '../shared/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryTodoService implements InMemoryDbService {

  constructor() { }

    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const todos: Todo[] = [
            {id: 1, title: 'First thing', completed: true},
            {id: 2, title: 'Second thing', completed: false},
            {id: 3, title: 'Third thing', completed: true},
            {id: 4, title: 'Last thing', completed: true}
        ];
        return {todos};
    }

    genId(todos: Todo[]): number {
        return null;
      // return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
