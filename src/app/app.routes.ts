import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup';

export const routes: Routes = [
 {path: 'signup', component: SignupComponent},
  { path: '', redirectTo: 'signup', pathMatch: 'full' } // optional default route
];