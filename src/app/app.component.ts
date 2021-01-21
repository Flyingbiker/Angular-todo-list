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

      if ($input instanceof HTMLInputElement) {
        console.log($input.value);  
        $input.value;      
      }
      
      console.log('Enter pressed');
    }
  }
}
