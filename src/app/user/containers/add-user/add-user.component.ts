import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() nItem: EventEmitter<User> = new EventEmitter();
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  addUser(obj: User) {
    this.userService.addUser(obj).then(res => {  });
  }
}
