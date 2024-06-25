import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginHistoryComponent } from './components/login-history/login-history.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../shared/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    UserListComponent,
    LoginHistoryComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    UserModule
  ]
})
export class AdminModule { }
