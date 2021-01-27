//l'interface permet de communiquer avec une API
// ce n'est pas le cas avec un modèle
//le modèle est donc à utiliser si pas de contact avec un webservice
//pour l'interface, pas besoin de préciser pulic car c'est l'objectif
//Etre l'interface avec le webservice

export interface TodoItem {
    title : string;
    checked: boolean;
}