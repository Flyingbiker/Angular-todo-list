import { TodoItem } from './../todo-item.d';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-size',
  templateUrl: './array-size.component.html',
  styleUrls: ['./array-size.component.scss']
})
export class ArraySizeComponent implements OnInit {

  public arrayLength : number | null = null;
  @Input() public array : Array<TodoItem> = [];

  constructor() { 
  }
  
  public lengthArray():number {
    return this.arrayLength = this.array.length;
  }

  ngOnInit(): void {
  }

}
