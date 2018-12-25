import {Component, OnInit} from '@angular/core';

export class Todo {
    id: number;
    title: string;
    completed: boolean;

}

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos: Todo[] = [
        {id: 1, title: 'First thing', completed: true},
        {id: 2, title: 'Second thing', completed: false},
        {id: 3, title: 'Third thing', completed: true}
    ];

    displayedColumns: string[] = ['id', 'title', 'completed', 'actions'];

    constructor() {
    }

    ngOnInit() {
        console.log('i am starting the appp');
    }

}
