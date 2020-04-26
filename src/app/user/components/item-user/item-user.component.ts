import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss']
})
export class ItemUserComponent implements OnInit {
  @Input() item: User;
  constructor() { }

  ngOnInit() {
  }

}
