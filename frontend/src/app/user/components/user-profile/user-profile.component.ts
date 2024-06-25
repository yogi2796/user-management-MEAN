import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Output() userData = new EventEmitter();
  userProfileForm: FormGroup;
  user: User | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      gender: [''],
      country: [''],
      state: [''],
      city: ['']
    });
  }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      user => {
        this.user = user;
        this.userProfileForm.patchValue(user);
        this.userData.emit(user);
      },
      error => {
        console.error('Error fetching user profile:', error);
        // Handle error, e.g., show error message to the user
      }
    );
  }

  onSubmit(): void {
    if (this.userProfileForm.valid) {
      // Assuming UserService has an update method to send updated profile
      this.userService.updateUserProfile(this.userProfileForm.value, this.user?._id).subscribe(
        updatedUser => {
          this.user = updatedUser;
          // Optionally, show success message or update UI

        },
        error => {
          console.error('Error updating user profile:', error);
          // Handle error, e.g., show error message to the user
        }
      );
    }
  }
}
