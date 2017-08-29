import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProfileService {
  profile: any;
  constructor(public db: AngularFireDatabase) { }

  getProfile(id) {
    this.profile = this.db.object(`users/${id}`);
    return this.profile;
  }
}
