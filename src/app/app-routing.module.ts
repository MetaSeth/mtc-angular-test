import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAddUserComponent } from './user/pages/page-add-user/page-add-user.component';


const routes: Routes = [{
  path: '**',
  component: PageAddUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
