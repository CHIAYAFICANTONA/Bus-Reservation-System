import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';
import {Seat} from './model/Seat';

@Component({
  selector: 'app-seats',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.css'
})
export class SeatsComponent {

  // Define seat rows (each row is an array of seats)
  seatRows: Seat[][] = [
    [
      { number: '71', available: true, selected: false, door: false, noShow: false },
      { number: '70', available: false, selected: false, door: false, noShow: false },
      { number: '69', available: true, selected: false, door: false, noShow: false },
      { number: '68', available: true, selected: false, door: false, noShow: false },
      { number: '67', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '66', available: true, selected: false, door: false, noShow: false },
      { number: '65', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '63', available: true, selected: false, door: false, noShow: false },
      { number: '62', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '61', available: true, selected: false, door: false, noShow: false },
      { number: '60', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '59', available: true, selected: false, door: false, noShow: false },
      { number: '58', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '57', available: true, selected: false, door: false, noShow: false },
      { number: '56', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '55', available: true, selected: false, door: false, noShow: false },
      { number: '54', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '53', available: true, selected: false, door: false, noShow: false },
      { number: '52', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '51', available: true, selected: false, door: false, noShow: false },
      { number: '50', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '49', available: true, selected: false, door: false, noShow: false },
      { number: '48', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '47', available: true, selected: false, door: false, noShow: false },
      { number: '46', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '45', available: true, selected: false, door: false, noShow: false },
      { number: '44', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '43', available: true, selected: false, door: false, noShow: false },
      { number: '42', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '41', available: true, selected: false, door: false, noShow: false },
      { number: '40', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '39', available: true, selected: false, door: false, noShow: false },
      { number: '38', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '37', available: true, selected: false, door: false, noShow: false },
      { number: '36', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '35', available: true, selected: false, door: false, noShow: false },
      { number: '34', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '33', available: true, selected: false, door: false, noShow: false },
      { number: '32', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '31', available: true, selected: false, door: false, noShow: false },
      { number: '30', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '29', available: true, selected: false, door: false, noShow: false },
      { number: '28', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '27', available: true, selected: false, door: false, noShow: false },
      { number: '26', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '25', available: true, selected: false, door: false, noShow: false },
      { number: '24', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '23', available: true, selected: false, door: false, noShow: false },
      { number: '22', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '21', available: true, selected: false, door: false, noShow: false },
      { number: '20', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '19', available: true, selected: false, door: false, noShow: false },
      { number: '18', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '17', available: true, selected: false, door: false, noShow: false },
      { number: '16', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '15', available: true, selected: false, door: false, noShow: false },
      { number: '14', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '13', available: true, selected: false, door: false, noShow: false },
      { number: '12', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '11', available: true, selected: false, door: false, noShow: false },
      { number: '10', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '09', available: true, selected: false, door: false, noShow: false },
      { number: '08', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '07', available: true, selected: false, door: false, noShow: false },
      { number: '06', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '05', available: true, selected: false, door: false, noShow: false },
      { number: '04', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '03', available: true, selected: false, door: false, noShow: false },
      { number: '02', available: true, selected: false, door: false, noShow: false }
    ],
    [
      { number: '70', available: true, selected: false, door: false, noShow: false },
      { number: '69', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: 'Door', available: true, selected: false, door: true, noShow: false }
    ],
    [
      { number: 'Driver', available: false, selected: false, door: false, noShow: false },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '', available: true, selected: false, door: false, noShow: true },
      { number: '01', available: false, selected: false, door: false, noShow: false }
    ]
    
    // Add more rows if needed
  ];

  selectedSeats: string[] = [];
  totalPrice: number = 0;
  totalSeats: number = 0;

  // Toggle seat selection
  toggleSeat(seat: Seat): void {
    if (seat.available) {
      seat.selected = !seat.selected;

      if (seat.selected) {
        this.selectedSeats.push(seat.number);
      } else {
        const index = this.selectedSeats.indexOf(seat.number);
        if (index > -1) {
          this.selectedSeats.splice(index, 1);
        }
      }

      this.updateSummary();
    }
  }

  // Update the summary based on selected seats
  updateSummary(): void {
    this.totalSeats = this.selectedSeats.length;
    this.totalPrice = this.totalSeats * 5000; // Assuming each seat costs 5000 XAF
  }
}
