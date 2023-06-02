import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Tijdelijke implementatie om de guard te testen
    const isLoggedIn = false; // Simuleer dat de gebruiker niet is ingelogd

    if (isLoggedIn) {
      return true;
    } else {
      // Gebruiker is niet ingelogd, doorsturen naar een andere route (bijvoorbeeld de login-pagina)
      this.router.navigate(['/login']);
      return false;
    }
  }
}
