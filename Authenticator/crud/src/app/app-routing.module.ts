import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'add', component: AddComponent},
  {path:'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
