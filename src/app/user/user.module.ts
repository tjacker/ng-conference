import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  exports: [],
  declarations: [ProfileComponent, LoginComponent]
})
export class UserModule {}
