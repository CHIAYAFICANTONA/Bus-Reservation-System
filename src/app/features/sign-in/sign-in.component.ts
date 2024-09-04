import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {SignInService} from "./service/sign-in.service";
import {SignIn} from "./model/SignIn";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  private user: SignIn = {
    firstName: '',
    lastName: '',
    password: ''
  }

  constructor(
    private _signInServer: SignInService,
    private router: Router) {
  }

  public submit(form: NgForm): void {
    this._signInServer.signIn(this.user)
      .subscribe({
        next: (response) => {
          console.log('response', response)
          //   process to the dashboard
          this.router.navigate(['/dashboard'])
        },
        error: (error) => {
          console.error('Error fetching data', error);
        },
      });
  }

}
