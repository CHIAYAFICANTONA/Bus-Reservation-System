import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AddUsers, User} from "../model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'learning app',
      }
    });
  }

  public addUsers(adduser: AddUsers): Observable<AddUsers> {
    return this.http.post<AddUsers>(`${this.apiUrl}/user`, adduser)
  }
}
