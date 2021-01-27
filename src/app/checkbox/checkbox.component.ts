import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  //l'attribut static est un attribut commun de la classe
  //et n'appartient pas aux instances de la classe
  private static counter = 0;

  public id : string = 'app-checkbox-'+0;


  constructor() { 
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.counter++;
   }

  ngOnInit(): void {
  }

}
