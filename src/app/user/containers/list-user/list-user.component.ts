import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public collectionUsers: Observable<User[]>;
  public labels: string[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.collectionUsers = this.userService.getUsers();
    this.labels = ['Nom', 'Prénom', 'Date de naissance', 'Numéro de téléphone', 'Adresse mail'];
  }
}
