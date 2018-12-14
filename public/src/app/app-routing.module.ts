import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DetailsComponent } from './details/details.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  { path: 'pets', component: HomeComponent },
  { path: 'pets/new', component: AddPetComponent },
  { path: 'pets/:id', component: DetailsComponent },
  { path: 'pets/:id/edit', component: EditPetComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
