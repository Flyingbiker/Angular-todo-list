import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  // @Input()
  // public checked  = false;
  //pas besoin de mettre le type boolean car on le déclare à false après

  //pour faire remonter le fait de cocher la checkbox vers le parent
  @Output() public checkedChange = new EventEmitter();
  //le composition du nom est le nom de l'attribut + Change (nomenclature Angular)

  constructor() { 
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.incrementCounter();
   }

   //getter et setter de checked ligne 23   
   private internalChecked = false;
   public get checked():boolean {
    return this.internalChecked;
   }
   @Input() // @Input pour le setter car on veut récupérer la valeur de l'attribut dans la balise
   public set checked(val : boolean) {
    this.internalChecked = val;
    this.checkedChange.emit(this.internalChecked);
   }

  //exmple avec une méthode statique
  private static incrementCounter() : void {
    CheckboxComponent.counter++;
  }

  ngOnInit(): void {
  }

}
