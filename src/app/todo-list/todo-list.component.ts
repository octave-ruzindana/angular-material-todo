import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../shared/todo';
import {TodoService} from '../shared/todo.service';
import {Subscription} from 'rxjs';
import {TodoDataSource} from '../shared/todo-data-source';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoDataSource: TodoDataSource;

    displayedColumns: string[] = ['id', 'title', 'completed', 'actions'];

    constructor(private todoService: TodoService) {
        this.todoDataSource = new TodoDataSource(todoService);
    }

    ngOnInit() {
        console.log('i am starting the app.');
        this.todoService.findAll();
    }



}
