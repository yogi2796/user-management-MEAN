import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/v1/auth'; // Replace with your backend API URL

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        // Assuming your backend returns a JWT token upon successful login
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Toastr 
  showSuccess(message: string): void{
    this.toastr.success(message)
  }

  showError(message: string): void{
    this.toastr.error(message)
  }

  showInfo(message: string): void{
    this.toastr.info(message)
  }

  showWarning(message: string): void{
    this.toastr.warning(message)
  }
}
