import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private authentication: AngularFireAuth, private database: AngularFireDatabase) {
    this.user = authentication.authState;
  }

  googleLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  githubLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  facebookLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  twitterLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then((currentUserInfo)=>{
      this.database.object(`/users/${currentUserInfo.user.uid}`).subscribe(firebaseUserInfo => {
          if(firebaseUserInfo.$value === null) {
            firebase.database().ref('users/' + firebaseUserInfo.user.uid).set({
              name: firebaseUserInfo.additionalUserInfo.profile.name,
              username: firebaseUserInfo.additionalUserInfo.username,
              photo: firebaseUserInfo.additionalUserInfo.profile.profile_image_url,
              bio: firebaseUserInfo.additionalUserInfo.profile.description,
              loginType: "twitter"
            });
          }
        });
    });
  }

  logout() {
    this.authentication.auth.signOut();
  }
}
