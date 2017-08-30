import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {
  profile: Observable<Profile>;
  constructor(public db: AngularFireDatabase) { }

  getProfile(id) {
    this.profile = this.db.object(`users/${id}`);
    return this.profile;
  }
}
