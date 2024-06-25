import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/v1/users'; // Replace with your backend API URL

  headers: any = null;

  constructor(private http: HttpClient,  private toastr: ToastrService) { 
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }

  getUserProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile`, {headers: this.headers});
  }

  updateUserProfile(user: User, userid: string = ''): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/profile/${userid}`, user, {headers: this.headers});
  }

  deleteUserProfile(userid: string = ''): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/profile/${userid}`, {headers: this.headers});
  }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/list`, {headers: this.headers});
  }

  getUserLoginHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`, {headers: this.headers});
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
