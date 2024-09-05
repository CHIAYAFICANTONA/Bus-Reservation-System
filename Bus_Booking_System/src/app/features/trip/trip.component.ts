import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {

}
