import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private subscription: Subscription;
  constructor(private authentication: AngularFireAuth,
              private database: AngularFireDatabase,
              private router: Router) {
    this.user = authentication.authState;
  }

  private login(id, provider, name, username, photo, bio, email, ) {
      this.subscription = this.database.object(`/users/${id}`)
      .subscribe(firebaseUserInfo => {
        if (firebaseUserInfo.$value === null) {
          firebase.database().ref('users/' + id).set({
            name: name,
            username: username,
            photo: photo,
            bio: bio,
            email: email,
            loginType: provider
          });
        }
      })
  }

  googleLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((currentUserInfo) => {
        this.login(currentUserInfo.user.uid, 'google',
          currentUserInfo.additionalUserInfo.profile.name, "",
          currentUserInfo.additionalUserInfo.profile.picture, "",
          currentUserInfo.additionalUserInfo.profile.email,
        )
      });
  }

  githubLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((currentUserInfo) => {
        this.login(currentUserInfo.user.uid, 'github',
          currentUserInfo.additionalUserInfo.profile.name, currentUserInfo.additionalUserInfo.profile.login,
          currentUserInfo.additionalUserInfo.profile.avatar_url, currentUserInfo.additionalUserInfo.profile.bio,
          currentUserInfo.additionalUserInfo.profile.email,
        )
      });
  }

  facebookLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((currentUserInfo) => {
        this.login(currentUserInfo.user.uid, 'facebook',
          currentUserInfo.additionalUserInfo.profile.name, "",
          currentUserInfo.additionalUserInfo.profile.picture.data.url, "",
          currentUserInfo.additionalUserInfo.profile.email,
        )
      });
  }

  twitterLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((currentUserInfo) => {
        this.login(currentUserInfo.user.uid, 'twitter',
          currentUserInfo.additionalUserInfo.profile.name, currentUserInfo.additionalUserInfo.username,
          currentUserInfo.additionalUserInfo.profile.profile_image_url, currentUserInfo.additionalUserInfo.profile.description,
          "",
        )
      });
  }

  logout() {
    this.authentication.auth.signOut();
    this.subscription.unsubscribe();
    this.router.navigateByUrl('/');
  }
}
