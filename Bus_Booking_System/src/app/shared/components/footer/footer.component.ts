import {Component} from '@angular/core';
import {Footer} from "./model/footer";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public footerItems: Footer[] = [
    {
      title: 'Privacy Policy',
      link: 'Privacy Policy',
      id: 1
    },
    {
      title: 'Terms of Service',
      link: 'Terms of Service',
      id: 2
    }
  ];

}
