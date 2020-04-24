import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './components/form-user/form-user.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { AddUserComponent } from './containers/add-user/add-user.component';



@NgModule({
  declarations: [FormUserComponent, PageAddUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
