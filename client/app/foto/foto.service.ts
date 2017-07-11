import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto.component';

export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }


    cadastra(foto: FotoComponent) {

        event.preventDefault();

        console.log(this.foto);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
            .post(this.url, JSON.stringify(foto), { headers: this.headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso!');    
            }, erro => console.log(erro));

    }

    lista() {

        this.http
        .get(this.url)
        .map(res => res.json())
        .subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }
}