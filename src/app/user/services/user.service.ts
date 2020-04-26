import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private itemsCollection: AngularFirestoreCollection<User>;
  private collection: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<User>('users');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab =>  tab.map(obj =>  new Prestation(obj)))
      map((tab) => {
        return tab.map((obj) => {
          return new User(obj);
        });
      }));
  }


  public addUser(item: User): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('users')
        .add(item)
        .then(res => { }, err => reject(err));
    });
  }
  public getUsers(): Observable<User[]> {
    return this.collection;
  }

}
