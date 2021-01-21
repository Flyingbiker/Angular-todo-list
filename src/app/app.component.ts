import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public todoArray : Array<string> = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
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
        if ($input.value !== '' ) {
          //pour pousse la valueur dans le tableau
          this.todoArray.push($input.value);
  
          //pour vider le champs input
          $input.value='';

        }        
      }
      
      console.log('Enter pressed');
    }
  }

  public removeItem(itemIndex : number) : void {
    console.log(itemIndex);

    if (itemIndex !==-1){
      this.todoArray.splice(itemIndex,1);
    }

  }
}
