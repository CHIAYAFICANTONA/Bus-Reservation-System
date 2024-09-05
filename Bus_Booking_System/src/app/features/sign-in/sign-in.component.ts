import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  public submit(form: NgForm): void {
    console.log('dsd', form.value)
  }

}
