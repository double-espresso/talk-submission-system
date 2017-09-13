import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase/app';

@Component({
  selector: 'tss-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {
  profile: Profile;
  id: string;
  name: string;
  username: string;
  photo: string;
  bio: string;
  email: string;

  constructor(private authService: AuthService,
              private database: AngularFireDatabase,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.authService.user
    .take(1)
    .subscribe((data)=> {
      if (data !== null) {
          this.id = data.uid;
          this.profileService.getProfile(data.uid)
          .take(1)
          .subscribe((profile)=>{
            this.profile = profile;
          });
      }
    });
  }

  update(name: string, username: string,
         photo: string, bio: string, email: string) {
     this.database.object(`/users/${this.id}`)
       .take(1)
       .subscribe(firebaseUserInfo => {
           firebase.database().ref('users/' + this.id).update({
             name: name || this.profile.name,
             username: username || this.profile.username,
             photo: photo || this.profile.photo,
             bio: bio || this.profile.bio,
             email: email || this.profile.email,
           });
       });
  }

}
