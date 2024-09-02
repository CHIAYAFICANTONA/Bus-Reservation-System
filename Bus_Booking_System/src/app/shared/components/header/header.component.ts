import {Component} from '@angular/core';
import {HeaderItems} from "./model/HeaderItems";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuOpen: boolean = false;

  public headerItems: HeaderItems[] = [
    {
      id: 1,
      link: '#home',
      title: 'Home'
    },
    {
      id: 2,
      link: '#offers',
      title: 'Offers'
    },
    {
      id: 3,
      link: '#howTo',
      title: 'How To'
    },
    {
      id: 4,
      link: '#popular',
      title: 'Popular Destinations'
    },
    {
      id: 5,
      link: '#faq',
      title: 'FAQs'
    },
    {
      id: 6,
      link: '#contactUs',
      title: 'Contact Us'
    }
  ];

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden', !this.menuOpen);
    }
  }
}
