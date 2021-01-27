import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  //l'attribut static est un attribut commun de la classe
  //et n'appartient pas aux instances de la classe
  //cette ligne ne sera exécuté qu'au lancement du programme
  //et pas à chaque création de classe
  private static counter = 0;

  public id : string;


  constructor() { 
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.incrementCounter();
   }

  //exmple avec une méthode statique
  private static incrementCounter() : void {
    CheckboxComponent.counter++;
  }

  ngOnInit(): void {
  }

}
