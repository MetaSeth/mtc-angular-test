import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  @Output() nItem: EventEmitter<User> = new EventEmitter();
  public form: FormGroup;
  public init = new User();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateForm();

  }
  private generateForm() {
    this.form = this.fb.group({
      lastName: [this.init.lastName, Validators.required,],
      firstName: [this.init.firstName, Validators.required,],
      birthDate: [this.init.birthDate, Validators.required,],
      phoneNum: [this.init.phoneNum, Validators.pattern('[0-9]*')],
      mail: [this.init.mail, Validators.compose([Validators.required, Validators.email])]
    });
  }
  public onSubmit() {
    console.log("form-user");
    this.nItem.emit(this.form.value);

  }

}
