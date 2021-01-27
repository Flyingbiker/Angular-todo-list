import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public tmp = true;

  //le type TodoItem provientde l'interface todo-itemdts
  public todoArray : Array<TodoItem> = [
    {
      title : 'item 1',
      checked: false
    },
    {
      title : 'item 2',
      checked: true
    },
    {
      title : 'item 3',
      checked: false
    },
    {
      title: 'item 4',
      checked:false
    }
  ]
  
  //: ici permet de déterminer le type de retour de la fonction 
  //le void permet ici de dire qu'on n'attend pas de retour
  public addItem($event: KeyboardEvent): void {
    if ($event.code === 'Enter'){
      // const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
      //le as permet de faire croire à la constante que c'est un HTMLInputElement

      const $input : EventTarget |null = $event.target;

      //comme la méthode peut être utilisée ailleur que dans le input, on test
      if ($input instanceof HTMLInputElement) {
        console.log($input.value);  

        //ici on supprime les espaces pour éviter d'insérer une ligne vide
        const str = $input.value.trim();
        if (str !== '' ) {
          //pour pousse la valeur dans le tableau
          this.todoArray.push({
            title : str, 
            checked : false
          });
  
          //pour vider le champs input
          $input.value='';

        }        
      }
      
      console.log('Enter pressed');
    }
  }

  public removeItem(index : number) : void {
    if (index !==-1 && index < this.todoArray.length){
      this.todoArray.splice(index,1);
    }
  }

  public removeSelectedItems(array : Array<TodoItem>) : void {    
    for (let i=array.length-1; i >= 0; i--){
      if (array[i].checked === true) {
        array.splice(i,1);
      }
    }
    //solution 3 avec filter
    //array = array.filter( () => {
    // return !item.check;
    //})
  }
  
  //le getter est un attribut et non pas une méthode. 
  //D'où l'absence de () dans l'appel du html
  public get atLeastOneChecked() : boolean {
    for (const item of this.todoArray) {
      if (item.checked){
        return true;
      }
    }
    return false;
  }
  
  ngOnInit(): void {}

}
