import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  templat: boolean = true;
  templEdit: boolean = false;
  novoTitle: string = "";
  novoLink: string = "";
  titleEdit: string = "";
  linkEdit: string = "";

  @Input() lab: any = "Loading...";
  value:string = "teste"
  idPassado: any;
  id: number = 0;
  b: string = "";
  editobj:{} = "";
  resultado: boolean = false;
  geradosTemplate: boolean = true;
  ngOnChanges(){
  console.log(this.lab)

}

constructor (private http: HttpClient){ }
editar(id: number) {
  this.templEdit = true;

  let botoesEditar: NodeListOf<Element> = document.querySelectorAll(".botaoEdit");
  console.log( botoesEditar);
  let texto:any = botoesEditar[id].textContent;
  console.log(texto);
  this.id = texto;
  this.titleEdit = this.lab[id].title;
  console.log(this.titleEdit);
  this.linkEdit = this.lab[id].destinationLink;
  console.log(this.linkEdit);
  this.geradosTemplate = false;
  console.log(this.geradosTemplate  )

  }
  editFinale() {
    console.log(this.titleEdit)
  if(this.linkEdit === "" || this.titleEdit === ""){
    window.alert("Os campos devem ser preenchidos")
  }else{
  console.log(this.id)
  let lista = {
    "id": 0,
    "title": this.novoTitle,
    "destinationLink": this.novoLink
  }
  console.log(lista)
  this.http.put<any>(`http://localhost:3000/api/shortenedLinks/${this.id}/`, lista)
  .subscribe(
    resutado =>{ console.log(resutado)
    if(resutado.status === 404){
      this.resultado = false;

    }else{
      this.resultado = true;

    }
    if(this.resultado === true){
      window.alert("editado com sucesso");
      location.reload();
    }else{
      window.alert("Falha ao tentar edtar")
    }
  }
    )
  }
  }

  iniciarDelete(id: number){
    this.idPassado = id;
    console.log(this.idPassado)
    let botoes: NodeListOf<Element> = document.querySelectorAll(".botoes");
    console.log("b " + botoes);
    let texto:any = botoes[id].textContent
    console.log(texto)
    this.http.delete<any>(`http://localhost:3000/api/shortenedLinks/${texto}`, )
        .subscribe(
          resutado =>{ console.log(resutado)
            this.b = "sucesso"
           })
               window.alert("link excluido com sucesso")
               location.reload()

  }


    close() {
      location.reload();

    }
}
