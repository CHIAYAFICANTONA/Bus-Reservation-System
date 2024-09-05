import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {BusSeatsComponent} from "./bus-seats/bus-seats.component";
import {HotelRoomsComponent} from "./hotel-rooms/hotel-rooms.component";
import {SettingsComponent} from "./settings/settings.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {TripDetailsComponent} from "./trip-details/trip-details.component";

export const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, title: 'Dashboard', children: [
      {path: 'stats', component: StatisticsComponent, title: 'Statistics'},
      {path: 'userManagement', component: UserManagementComponent, title: 'Users'},
      {path: 'bus-seats', component: BusSeatsComponent, title: 'Bus Seats'},
      {path: 'hotel-rooms', component: HotelRoomsComponent, title: 'Hotel Rooms'},
      {path: 'settings', component: SettingsComponent, title: 'Settings'},
      {path: 'tickets', component: TicketsComponent, title: 'Tickets'},
      {path: 'trip-details', component: TripDetailsComponent, title: 'Trip Details'}
    ]
  },
]
