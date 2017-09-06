import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile } from '../models/profile';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-facebook-profile',
  templateUrl: './facebook-profile.component.html',
  styleUrls: ['./facebook-profile.component.sass']
})
export class FacebookProfileComponent implements OnInit {
  profile: Profile;
  constructor(private authService: AuthService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.authService.user
    .take(1)
    .subscribe((data)=> {
      if (data !== null) {
          this.profileService.getProfile(data.uid)
          .take(1)
          .subscribe((profile)=>{
            this.profile = profile;
          });
      }
    })
  }

  ngOnDestroy() {

  }
  }
