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
  @Input() //décorateur de l'attribut label
  public label : string|null = null;
  //ajout de la valeur null pour initialiser l'attribut (sinon il y a une erreur)
  //c'est du au typage strict de TS

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
