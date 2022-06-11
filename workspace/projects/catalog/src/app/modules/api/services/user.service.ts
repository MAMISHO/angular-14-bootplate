import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestLogin, ResponseLogin, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerUserURI = '/register';
  private loginUserURI = '/api/login';

  constructor(private http: HttpClient) {}

  public register(user: User): Observable<User> {
    return this.http
      .post<User>(this.registerUserURI, user)
      .pipe(catchError(this.error));
  }

  public login(request: RequestLogin): Observable<ResponseLogin> {
    return this.http
      .post<ResponseLogin>(this.loginUserURI, request)
      .pipe(catchError(this.error));
  }

  public logout(user: User): Observable<User> {
    return this.http
      .post<User>(this.registerUserURI, user)
      .pipe(catchError(this.error));
  }

  private error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
