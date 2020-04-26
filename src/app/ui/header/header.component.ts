import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public labels: string[];
  public links: string[];
  constructor() { }

  ngOnInit() {
    this.labels = ['Nouvel utilisateur', 'Liste des utilisateurs'];
  }

}
