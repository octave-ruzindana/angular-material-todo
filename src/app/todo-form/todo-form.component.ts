import {Component, OnInit} from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

    title: string;

    constructor(private todoService: TodoService) {
        this.title = '';
    }

    ngOnInit() {
    }

    isValidTitle(): boolean {
        return this.title !== null && this.title.length > 8;
    }

    onClickSave() {
        this.todoService.save(this.title);
        this.title = ''; // clear field
        // save title
    }
}
