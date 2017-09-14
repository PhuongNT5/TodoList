import { Component, OnInit } from '@angular/core';
import {TodoWork} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: TodoWork[];
  checkAllState = 'none';
  ngOnInit() {
     this.items = [
       {
         id: 1,
         name: 'One',
         isSelected: false,
         isDone: false
       }
      ];
  }
  onAddTodo(name: string) {
    const newitem: TodoWork = {
      id: this.items.length + 1,
      name: name
    };
    this.items.push(newitem);
    this.calculateCheckAll();
  }
  onSelectAll(isAll ) {
    if (isAll) {
      this.items = this.items.map((item) => item.isSelected ? item : Object.assign({}, item, { isSelected: true }));
    } else {
      this.items = this.items.map((item) => item.isSelected ? Object.assign({}, item, { isSelected: false }) : item);
    }
    this.calculateCheckAll();
  }
  onCheckDone(id) {
    const index = this.items.findIndex((it) => it.id === id);
    if (index !== -1) {
      const newItem = Object.assign({}, this.items[index], { isDone: true });
      this.items = [...this.items.slice(0, index), newItem, ...this.items.slice(index + 1)];
    }
    this.calculateCheckAll();
  }
  onUnDone(id) {
    const index = this.items.findIndex((it) => it.id === id);
    if (index !== -1) {
      const newItem = Object.assign({}, this.items[index], { isDone: false });
      this.items = [...this.items.slice(0, index), newItem, ...this.items.slice(index + 1)];
    }
    this.calculateCheckAll();
  }
  onDeleted(id) {
    const index = this.items.findIndex((it) => it.id === id);
    if (index !== -1) {
      this.items = [...this.items.slice(0, index), ...this.items.slice(index + 1)];
    }
    this.calculateCheckAll();
  }

  onRemove() {
    this.items = this.items.filter((item) => !item.isSelected);
    this.calculateCheckAll();
  }

  onClearSelected() {
    this.items = this.items.map((item) => item.isSelected ? Object.assign({}, item, { isSelected: false }) : item);
    this.calculateCheckAll();
  }
  onSelect({itemSelect, selected}) {
    const index = this.items.findIndex((item) => item.id === itemSelect);
    if (index === -1) {
      return;
    }
    const updatedItem = Object.assign({}, this.items[index], { isSelected: selected});
    this.items = [...this.items.slice(0, index), updatedItem, ...this.items.slice(index + 1)];
    this.calculateCheckAll();
  }

  calculateCheckAll() {
    const selectedItems = this.items.filter((item) => item.isSelected);
    if (selectedItems.length === 0) {
      this.checkAllState = 'none';
    } else if (selectedItems.length < this.items.length) {
      this.checkAllState = 'partial';
    } else {
      this.checkAllState = 'all';
    }
  }
}
