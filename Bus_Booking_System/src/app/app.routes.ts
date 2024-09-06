import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {SignInComponent} from "./features/sign-in/sign-in.component";
import {SignUpComponent} from "./features/sign-up/sign-up.component";
import {AgencyComponent} from "./features/agency/agency.component";
import {TripComponent} from "./features/trip/trip.component";
import {ScheduleComponent} from "./features/schedule/schedule.component";
import {SeatsComponent} from "./features/seats/seats.component";
import {PaymentComponent} from "./features/payment/payment.component";
import {TripSummaryComponent} from "./features/trip-summary/trip-summary.component";


export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home',},
  {path: 'signIn', component: SignInComponent, title: 'Sign In',},
  {path: 'signUp', component: SignUpComponent, title: 'Sign Up',},
  {path: 'agency', component: AgencyComponent, title: 'Agency',},
  {path: 'trip', component: TripComponent, title: 'Trip',},
  {path: 'schedule', component: ScheduleComponent, title: 'Schedule',},
  {path: 'seats', component: SeatsComponent, title: 'Seats',},
  {path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes)},
  {path: 'payment', component: PaymentComponent, title: 'payment',},
  {path: 'trip-summary', component: TripSummaryComponent, title: 'trip-summary',}
];
