import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoxerComponent } from './dogs/boxer/boxer.component';
import { HoundComponent } from './dogs/hound/hound.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/hound', component: HoundComponent },
  { path: 'dogs/boxer', component: BoxerComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
