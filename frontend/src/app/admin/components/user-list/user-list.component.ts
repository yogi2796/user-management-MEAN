import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'phone', 'email'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error(error);
      }
    );
  }

  viewLoginHistory(userId: any): void {
    // Logic to navigate to login history page with user ID
  }
}
