import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take'

@Injectable()
export class AuthService {
  public loginProvider: string;
  user: Observable<firebase.User>;
  constructor(private authentication: AngularFireAuth, private database: AngularFireDatabase) {
    this.user = authentication.authState;
  }

  googleLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((currentUserInfo) => {
      this.database.object(`/users/${currentUserInfo.user.uid}`)
      .subscribe(firebaseUserInfo => {
        if(firebaseUserInfo.$value === null) {
          firebase.database().ref('users/' + currentUserInfo.user.uid).set({
            name: currentUserInfo.additionalUserInfo.profile.name,
            photo: currentUserInfo.additionalUserInfo.profile.picture,
            email: currentUserInfo.additionalUserInfo.profile.email,
            loginType: "google"
          });
        }
      })
    });
  }

  githubLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then((currentUserInfo) => {
      this.database.object(`/users/${currentUserInfo.user.uid}`)
      .subscribe(firebaseUserInfo => {
        if(firebaseUserInfo.$value === null) {
          firebase.database().ref('users/' + currentUserInfo.user.uid).set({
            name: currentUserInfo.additionalUserInfo.profile.name,
            photo: currentUserInfo.additionalUserInfo.profile.avatar_url,
            email: currentUserInfo.additionalUserInfo.profile.email,
            username: currentUserInfo.additionalUserInfo.profile.login,
            bio: currentUserInfo.additionalUserInfo.profile.bio,
            loginType: "github"
          });
        }
      })
    });
  }

  facebookLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((currentUserInfo) => {
      this.database.object(`/users/${currentUserInfo.user.uid}`)
      .subscribe(firebaseUserInfo => {
        if(firebaseUserInfo.$value === null) {
          firebase.database().ref('users/' + currentUserInfo.user.uid).set({
            name: currentUserInfo.additionalUserInfo.profile.name,
            photo: currentUserInfo.additionalUserInfo.profile.picture.data.url,
            email: currentUserInfo.additionalUserInfo.profile.email,
            loginType: "facebook"
          });
        }
      })
    });
  }

  twitterLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then((currentUserInfo)=>{
      this.database.object(`/users/${currentUserInfo.user.uid}`)
      .subscribe(firebaseUserInfo => {
          if(firebaseUserInfo.$value === null) {
            firebase.database().ref('users/' + currentUserInfo.user.uid).set({
              name: currentUserInfo.additionalUserInfo.profile.name,
              username: currentUserInfo.additionalUserInfo.username,
              photo: currentUserInfo.additionalUserInfo.profile.profile_image_url,
              bio: currentUserInfo.additionalUserInfo.profile.description,
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
