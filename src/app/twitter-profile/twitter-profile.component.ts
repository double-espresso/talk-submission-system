import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'tss-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrls: ['./twitter-profile.component.sass']
})
export class TwitterProfileComponent implements OnInit, OnDestroy {
  profile: Profile;
  subscription;
  constructor(private authService: AuthService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.subscription = this.authService.user
    .subscribe((data)=> {
      if (data !== null) {
          this.profileService.getProfile(data.uid)
          .subscribe((profile)=>{
            this.profile = profile;
          });
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log("twitter profile comp is killed");
  }
}
