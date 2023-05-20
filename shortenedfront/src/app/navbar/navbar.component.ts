import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() label: any = "Loading...";
  value:string = "carregando"
  gerado: string = "carregando";

  copiar() {
    let lis = document.getElementById("li")?.innerText
    console.log(lis)

    navigator.clipboard.writeText(String(lis))

}




}
