import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
   private isAuthenticate = false;

  checkAuthenticate(): boolean {
    const token = sessionStorage.getItem("a-token");

    if (token) {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }

    this.isAuthenticate = false;
    return this.isAuthenticate;
  }
}