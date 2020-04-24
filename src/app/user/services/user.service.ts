import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private itemsCollection: AngularFirestoreCollection<User>;

  constructor( private afs: AngularFirestore) { }

  public add(item: User): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afs
          .collection('users')
          .add(item)
          .then(res => {}, err => reject(err));
  });
  }
}
