import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
