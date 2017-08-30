import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  googleLogin() {
    this.auth.googleLogin();
  }
  facebookLogin() {
    this.auth.facebookLogin();
  }
  twitterLogin() {
    this.auth.twitterLogin();

  }
  githubLogin() {
    this.auth.githubLogin();
  }

  ngOnInit() {
  }
}
