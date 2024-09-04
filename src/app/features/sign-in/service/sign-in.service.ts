import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {SignIn} from "../model/SignIn";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private apiUrl = environment;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    console.log('dsd', this.apiUrl)
  }

  public getMethod(user: SignIn): Observable<SignIn> {
    return this.http.get<SignIn>(`${this.apiUrl}/${'dsdsd'}`);
  }

  signIn(signIn: SignIn): Observable<SignIn> {
    return this.http.post<SignIn>(`${this.apiUrl}/this is the name of the route`, signIn);
  }
}
