import { TodoItem } from './../todo-item.d';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-size',
  templateUrl: './array-size.component.html',
  styleUrls: ['./array-size.component.scss']
})
export class ArraySizeComponent implements OnInit {

  
  @Input() public array : Array<TodoItem> = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

}