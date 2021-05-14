import { AddProjectComponent } from './add-project/add-project.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from './edit-project/edit-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddProjectComponent },
  { path: 'edit/:id', component: EditProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
