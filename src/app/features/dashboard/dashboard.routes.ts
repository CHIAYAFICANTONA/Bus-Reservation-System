import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {StatisticsComponent} from "./statistics/statistics.component";

export const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'dashboard', children: [
      {path: 'stats', component: StatisticsComponent, title: 'statistics'},
      {path: 'userManagement', component: UserManagementComponent, title: 'users'},
    ]
  },
]
