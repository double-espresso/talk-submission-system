import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrls: ['./twitter-profile.component.sass']
})
export class TwitterProfileComponent implements OnInit {
  profile: any;
  constructor(public auth: AuthService, public profileService: ProfileService) {
  }

  ngOnInit() {
    this.auth.user.subscribe((data)=> {
        this.profile = this.profileService.getProfile(data.uid)
        .subscribe((profile)=>{
          this.profile = profile;
        });
    })
  }
}
