import { HttpClient } from '@angular/common/http';
import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'shortenedfront';
  estilo: string = " width: 80%; display: flex;flex-direction: column;margin: auto;width: 50%;background-color: rgb(255, 226, 154);color: rgb(70, 44, 44);padding-bottom: 1%;"
  newlinkclass: string = "bg-light text-dark pt-3";



}
