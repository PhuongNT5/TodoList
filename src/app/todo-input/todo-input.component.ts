import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {TodoWork} from '../model';
@Component ({
    selector: 'todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnChanges {
    name: string;

    @Output() newItem: EventEmitter<string> = new EventEmitter<string>();
    @Output() toggleCheck: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() state: string;
    addTodo() {
        if (this.name !== '') {
           this.newItem.emit(this.name);
           this.name = '';
        }
    }
    toggleAll() {
        const shouldCheckAll = this.state !== 'all';
        this.toggleCheck.emit(shouldCheckAll);
      }
    ngOnChanges() {
        console.log(this.state);
    }
}

