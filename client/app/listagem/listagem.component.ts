import { Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    
    fotos: Object[] = [];

    constructor(http: Http) {

    }
 }