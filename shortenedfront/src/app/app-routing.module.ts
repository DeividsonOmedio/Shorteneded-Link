import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewLinkComponent } from './create-new-link/create-new-link.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', component: AppComponent, pathMatch: 'full'},
  {path:'//dd', component: NavbarComponent, pathMatch: "full"},
  {path:'/list', component: ListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
