import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile } from '../models/profile';

@Component({
  selector: 'tss-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrls: ['./twitter-profile.component.sass']
})
export class TwitterProfileComponent implements OnInit {
  profile: Profile;
  constructor(private authService: AuthService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.authService.user.subscribe((data)=> {
        this.profile = this.profileService.getProfile(data.uid)
        .subscribe((profile)=>{
          this.profile = profile;
        });
    })
  }
}
