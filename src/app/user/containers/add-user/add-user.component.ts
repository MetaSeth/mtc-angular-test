import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService,
  ) { }

  ngOnInit() {
  }

  addUser(obj: User) {
    this.userService.add(obj); /*/!\.then(() =>

      // this.router.navigate('/user');
      this.router.navigate(['../'], {
        relativeTo: this.route
      }));*/

  }
}
