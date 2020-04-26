import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  addUser(obj: User) {
    this.userService.addUser(obj).then(res => {console.log('page add')
    });
  }
}
