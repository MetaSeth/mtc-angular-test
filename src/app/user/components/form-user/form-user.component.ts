import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
          lastName: [this.init.lastName],
          firstName: [this.init.firstName],
          birthDate: [this.init.birthDate],
          phoneNum: [this.init.phoneNum],
          mail: [this.init.mail]
      });
  }
  public onSubmit() {
      this.nItem.emit(this.form.value);

  }
}
