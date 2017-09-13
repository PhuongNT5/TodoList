import {Component, Output, EventEmitter} from '@angular/core';
import {InputList} from './todo-input';
import {TodoWork} from '../model';
@Component ({
    selector: 'todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {
    name: string;

    @Output() newItem: EventEmitter<TodoWork> = new EventEmitter<TodoWork>();

    addTodo() {
        if (this.name !== '') {
            const item: TodoWork = {
                id: 2,
                name: this.name,
                isSelected: false
           };
           this.newItem.emit(item);
        }
    }
}

