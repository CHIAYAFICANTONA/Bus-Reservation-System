import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

  isActive: boolean = false; // To track the state of the section's active class

  // Method triggered when VIP is clicked
  activateSection() {
    this.isActive = true;
  }

  // Method triggered when Classique is clicked
  deactivateSection() {
    this.isActive = false;
  }
}
