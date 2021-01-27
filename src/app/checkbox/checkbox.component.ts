import { TodoItem } from './../todo-item.d';
import { Component, Input, OnInit, Output } from '@angular/core';

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
  @Input() //décorateur qui permet d'ajouter l'attribut label dans le web component
  public label : string|null = null;
  //ajout de la valeur null pour initialiser l'attribut (sinon il y a une erreur)
  //c'est du au typage strict de TS
  @Input()
  public checked  = false;
  //pas besoin de mettre le type boolean car on le déclare à false après

  //pour faire remonter le fait de cocher la checkbox vers le parent
  

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
