import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
