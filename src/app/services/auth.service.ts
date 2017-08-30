import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = afAuth.authState;
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  githubLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  facebookLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  twitterLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then((data)=>{
      this.db.object(`/users/${data.user.uid}`).subscribe(data => {
          if(data.$value === null) {
            firebase.database().ref('users/' + data.user.uid).set({
              name: data.additionalUserInfo.profile.name,
              username: data.additionalUserInfo.username,
              photo: data.additionalUserInfo.profile.profile_image_url,
              bio: data.additionalUserInfo.profile.description,
              loginType: "twitter"
            });
          }
        });
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
