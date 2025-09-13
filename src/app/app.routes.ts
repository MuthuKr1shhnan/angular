import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin';
import { SignupComponent } from './signup/signup';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }, // if you already have this
];
