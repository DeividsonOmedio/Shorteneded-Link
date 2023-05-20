import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-create-new-link',
  templateUrl: './create-new-link.component.html',
  styleUrls: ['./create-new-link.component.css']
})
export class CreateNewLinkComponent {
placeholder: string = "";
titleholder: string = "";
clas: string = "input-group";
resultadogerado: any = "Carregando";
listagerada: any = "Carregando  ";
view: boolean = true;





  constructor (private http: HttpClient){}

gerarEncurtado() {
  this.resultadogerado = "carregando"
  let title = this.titleholder;
  let linkDestino = this.placeholder;
  let lista = {
    "id": 0,
    "title": title,
    "destinationLink": linkDestino
  }
  this.http.post<any>(`http://localhost:3000/api/shortenedLinks/`, lista)
           .subscribe(
              resultado =>{


               this.resultadogerado = resultado;

                console.log(resultado)
              },
              erro => {
                if(erro.status === 400){
                  console.log(erro);
                }
              }
            )
            this.titleholder = "";
            this.placeholder = "";
}
resgatar() {
  this.http.get<any>(`http://localhost:3000/api/shortenedLinks`)
            .subscribe(resultado =>{

                this.listagerada = resultado
              },
              erro => {
                if(erro.status === 400){
                  console.log(erro);
                }


            })


}
}





