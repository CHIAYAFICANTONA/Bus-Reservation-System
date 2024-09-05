import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {SignInComponent} from "./features/sign-in/sign-in.component";
import {SignUpComponent} from "./features/sign-up/sign-up.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home',},
  {path: 'signIn', component: SignInComponent, title: 'Sign In',},
  {path: 'signUp', component: SignUpComponent, title: 'Sign Up',},
  {path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes)}
];
