import {Component, Input} from '@angular/core';
import {TodoWork} from '../model';
@Component ({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls:  ['./todo-item.component.css']
})
export class TodoItemComponent {
    @Input() item: TodoWork;
}
