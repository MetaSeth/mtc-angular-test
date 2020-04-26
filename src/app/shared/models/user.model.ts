import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  lastName: string;
  firstName: string;
  birthDate: Date;
  phoneNum: string;
  mail: string;

  constructor(field?: Partial<User>) {
    if ( field ) {
      Object.assign(this, field);
    }
  }
}
