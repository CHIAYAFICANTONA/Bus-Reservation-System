import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-trip-summary',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './trip-summary.component.html',
  styleUrl: './trip-summary.component.css'
})
export class TripSummaryComponent {

}
