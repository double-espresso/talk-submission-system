import { Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Profile } from '../models/profile';


@Component({
  selector: 'tss-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  googleLogin() {
    this.authService.googleLogin();
  }
  facebookLogin() {
    this.authService.facebookLogin();
  }
  twitterLogin() {
    this.authService.twitterLogin();

  }
  githubLogin() {
    this.authService.githubLogin();
  }

  ngOnInit() {

  }

}
