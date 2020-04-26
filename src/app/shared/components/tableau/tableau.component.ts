import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
@Input() labels: string[];
  constructor() {

  }

  ngOnInit() {
  }

}