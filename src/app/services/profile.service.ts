import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {
  profile: Observable<Profile>;
  constructor(private database: AngularFireDatabase) { }

  getProfile(id) {
    this.profile = this.database.object(`users/${id}`);
    return this.profile;
  }

}
