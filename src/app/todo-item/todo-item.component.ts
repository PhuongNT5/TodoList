import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoWork} from '../model';
@Component ({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls:  ['./todo-item.component.css']
})
export class TodoItemComponent {
    @Input() item: TodoWork;
    @Output() itemIsDone: EventEmitter<number> = new EventEmitter<number>();
    @Output() itemUndo: EventEmitter<number>  = new EventEmitter<number>();
    @Output() itemDelete: EventEmitter<number> =  new EventEmitter<number>();
    @Output() isSelected: EventEmitter<Object> = new EventEmitter<Object>();

    isShowControl = false;
    isChecked: boolean;

    ngOnInit() {
        this.isChecked = this.item ? this.item.isSelected : false;
     }
    onHoverIn() {
        this.isShowControl = true;
      }

    onHoverOut() {
        this.isShowControl = false;
      }
    onDoneClick() {
        const itemDone = this.item.id;
        this.itemIsDone.emit(itemDone);
    }
    onUndo() {
        const itemToUndo = this.item.id;
        this.itemUndo.emit(itemToUndo);
    }
    onClearClick() {
        const itemToDet = this.item.id;
        this.itemDelete.emit(itemToDet);
    }
    onSelected() {
        const itemSelect = this.item.id;
        const selected = this.isChecked;
        this.isSelected.emit({itemSelect, selected});
    }
}
