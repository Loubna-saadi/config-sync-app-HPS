import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:8080/ords/pfe/pfeapi/auth/check';

  login(loginSaisi: string, mdpSaisi: string): Observable<any> {
    const body = { login: loginSaisi, password: mdpSaisi };

    return this.http.post<any>(this.apiUrl, body).pipe(
      tap(response => {
        if (response && response.token) {
          // Stockage des informations
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('username', response.login);
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
      })
    );
  }

  // Méthode de déconnexion
  logout(): void {
    // 1. On vide tout le stockage local
    localStorage.clear();
    
    // 2. On redirige vers la page de login
    this.router.navigate(['/login']);
  }

  // Helpers pour ton interface (Sidebar/Navbar)
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}