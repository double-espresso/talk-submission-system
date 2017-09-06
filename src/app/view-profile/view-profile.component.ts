import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'tss-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.sass']
})
export class ViewProfileComponent implements OnInit {
  profileProvider: string;
  constructor(private profileService: ProfileService,
              private authService: AuthService) { }

  ngOnInit() {
      this.authService.user
        .take(1)
        .subscribe((data) => {
          if (data !== null) {
            this.profileService.getProfile(data.uid)
              .take(1)
              .subscribe((profile) => {
                this.profileProvider = profile.loginType + "-profile";
              });
          }
        })
  }

}
