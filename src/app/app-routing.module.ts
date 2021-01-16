import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent} from './components/todos/todos.component'
import {AboutComponent } from './components/pages/about/about.component'
// All Routes are places in this file as seperate object variables
const routes: Routes = [
  // slashes are creeated automatically
  {path:'', component: TodosComponent },
  {path:'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 