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

  private login(id: string, provider: string, name: string, username: string,
    photo: string, bio: string, email: string) {

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
        });
  }

  googleLogin() {
    this.authentication.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((currentUserInfo) => {
        const user = currentUserInfo.user;
        const profile = currentUserInfo.additionalUserInfo.profile;
        this.login(user.uid, 'google',
          profile.name,
          '', // provider dont have username info
          profile.picture,
          '', // provider dont have bio
          profile.email,
        )
      });
  }

  githubLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((currentUserInfo) => {
        const user = currentUserInfo.user;
        const profile = currentUserInfo.additionalUserInfo.profile;
        this.login(user.uid, 'github',
          profile.name,
          profile.login,
          profile.avatar_url,
          profile.bio,
          profile.email,
        )
      });
  }

  facebookLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((currentUserInfo) => {
        const user = currentUserInfo.user;
        const profile = currentUserInfo.additionalUserInfo.profile;
        this.login(user.uid, 'facebook',
          profile.name,
          '', //provider dont have username
          profile.picture.data.url,
          '', //provider dont have bio
          profile.email,
        )
      });
  }

  twitterLogin() {
    this.authentication.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((currentUserInfo) => {
        const user = currentUserInfo.user;
        const profile = currentUserInfo.additionalUserInfo.profile;
        this.login(user.uid, 'twitter',
          profile.name,
          currentUserInfo.additionalUserInfo.username,
          profile.profile_image_url,
          profile.description,
          '', // provider dont have email
        )
      });
  }

  logout() {
    this.authentication.auth.signOut();
    this.subscription.unsubscribe();
    this.router.navigateByUrl('/');
  }
}
