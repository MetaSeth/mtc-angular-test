import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';




@NgModule({
  declarations: [TableauComponent],
  imports: [
    CommonModule
  ],
  exports:[TableauComponent]
})
export class SharedModule { }
