import { Component, OnInit } from '@angular/core';
import {TodoWork} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: TodoWork[];

  ngOnInit() {
     this.items = [
       {
         id: 1,
         name: 'One',
         isSelected: false,
       }
      ];
  }
  onAddTodo(item: TodoWork) {
    this.items.push(item);
  }
}
