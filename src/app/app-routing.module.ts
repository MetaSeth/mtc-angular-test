import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAddUserComponent } from './user/pages/page-add-user/page-add-user.component';
import { PageListUsersComponent } from './user/pages/page-list-users/page-list-users.component';


const routes: Routes = [
  {
    path: '',
    component: PageAddUserComponent
  },
  {
    path: 'register',
    component: PageAddUserComponent
  },
  {
    path: 'listUsers',
    component: PageListUsersComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
