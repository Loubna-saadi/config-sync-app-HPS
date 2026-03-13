import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // On pointe vers la nouvelle route /check
  private apiUrl = 'http://localhost:8080/ords/pfe/pfeapi/auth/check';

  constructor(private http: HttpClient) {}

  login(loginSaisi: string, mdpSaisi: string): Observable<any> {
    const body = {
      login: loginSaisi,
      password: mdpSaisi
    };

    // Note : On utilise POST ici
    return this.http.post<any>(this.apiUrl, body).pipe(
      map(response => {
        if (response.items && response.items.length > 0) {
          const user = response.items[0];
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        return null;
      })
    );
  }
}