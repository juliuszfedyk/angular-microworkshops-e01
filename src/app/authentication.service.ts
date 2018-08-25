import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url: string = 'https://ng-workshop-3-auth.azurewebsites.net/connect/token';
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  authenticate(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', "password");
    body.set('client_id', "angular.client");
    body.set('client_secret', "secret");

    return this.http.post<any>(this.url, body.toString(), {
      headers: headers
    }).pipe(
      map(jwt => {
        if (jwt && jwt.access_token) {
          localStorage.setItem('token', JSON.stringify(jwt))
        }
      })
    );
  }

  isAuthenticated() {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  canAccessHounds() {
    const rawToken = this.getToken();
    const token = JSON.parse(rawToken);
    const decoded = this.jwtHelper.decodeToken(token.access_token);
    const breed = decoded.breed;
    console.log(breed);
    return breed === "hound";
  }

  canAccessBoxers() {
    const rawToken = this.getToken();
    const token = JSON.parse(rawToken);
    const decoded = this.jwtHelper.decodeToken(token.access_token);
    const breed = decoded.breed;
    console.log(breed);
    return breed === "boxer";
  }

  getToken() {
    return this.jwtHelper.tokenGetter();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
