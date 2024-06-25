import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  _userData: User | null = null;
  constructor(private router: Router){}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  userData(data: User) {
    this._userData = data;
  }
}
