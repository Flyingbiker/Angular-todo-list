import { Component } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  //le type TodoItem provientde l'interface todo-itemdts
  public todoArray : Array<TodoItem> = [
    {
      title : 'item 1',
      check: false
    },
    {
      title : 'item 2',
      check: true
    },
    {
      title : 'item 3',
      check: true
    },
    {
      title: 'item 4',
      check:false
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
          //pour pousse la valueur dans le tableau
          this.todoArray.push({
            title : str, 
            check : false
          });
  
          //pour vider le champs input
          $input.value='';

        }        
      }
      
      console.log('Enter pressed');
    }
  }

  public removeItem(index : number) : void {
    console.log(index);

    if (index !==-1 && index < this.todoArray.length){
      this.todoArray.splice(index,1);
    }

  }

  public removeSelectedItems(array : Array<TodoItem>) : void {
    let length = array.length;
    for (let i=array.length-1; i > 0; i--){
      if (array[i].check === true) {
        array.splice(i,1);
      }
    }
  }
}
