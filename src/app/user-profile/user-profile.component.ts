import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile } from '../models/profile';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tss-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  profile: Profile;
  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;

  constructor(private authService: AuthService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.subscriptionOne = this.authService.user
    .subscribe((data)=> {
      if (data !== null) {
          this.subscriptionTwo = this.profileService.getProfile(data.uid)
          .subscribe((profile)=>{
            this.profile = profile;
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionOne.unsubscribe();
    this.subscriptionTwo.unsubscribe();
  }
}
