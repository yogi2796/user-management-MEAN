import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.css']
})
export class LoginHistoryComponent implements OnInit {
  loginHistory: any[] = [];
  displayedColumns = ['Name', 'Login At', 'IP']
  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserLoginHistory().subscribe(
      history => {
        this.loginHistory = history;
      },
      error => {
        console.error(error);
      }
    );
  }
}
