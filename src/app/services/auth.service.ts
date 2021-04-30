import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000';

  token: BehaviorSubject<string> = new BehaviorSubject<string>('');
  setToken: string;

  constructor(private http: HttpClient) { }

  public getToken() {
    this.setToken = sessionStorage.getItem('token');
    this.token.next(sessionStorage.getItem('token'));
  }

  // getInfo(){
  //  return this.http.get(`${this.url}/auth?client_id=${environment.G_API_CLIENT_ID}&redirect_uri=${environment.G_API_REDIRECT}&response_type=${this.setToken}`);
  // }

  // getInfo() {
  //   return this.http.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json`);
  // }

  //if (auth2.isSignedIn.get()) {
  //   var profile = auth2.currentUser.get().getBasicProfile();
  //   console.log('ID: ' + profile.getId());
  //   console.log('Full Name: ' + profile.getName());
  //   console.log('Given Name: ' + profile.getGivenName());
  //   console.log('Family Name: ' + profile.getFamilyName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail());
  // }
}
