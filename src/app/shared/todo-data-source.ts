import {DataSource} from '@angular/cdk/table';
import {Todo} from './todo';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {TodoService} from './todo.service';

export class TodoDataSource implements DataSource<Todo> {


    constructor(private todoService: TodoService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Todo[] | ReadonlyArray<Todo>> {
        return this.todoService.todos$.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }
}
