import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DogsComponent } from './dogs/dogs.component';
import { AuthenticationGuard } from './authentication.guard';
import { HoundComponent } from './dogs/hound/hound.component';
import { BoxerComponent } from './dogs/boxer/boxer.component';
import { HoundGuard } from './hound.guard';
import { BoxerGuard } from './boxer.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '403', component: ForbiddenComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/hound', component: HoundComponent, canActivate: [HoundGuard] },
  { path: 'dogs/boxer', component: BoxerComponent, canActivate: [BoxerGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
