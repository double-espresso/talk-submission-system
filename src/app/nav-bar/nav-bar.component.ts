import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'tss-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  profileProvider: string;
  constructor(private authService: AuthService, private router: Router, private profileService: ProfileService) { }

  logout() {
    this.router.navigateByUrl('/');
    this.authService.logout();
  }

  ngOnInit() {
    this.authService.user
    .subscribe((data)=> {
      if (data !== null) {
          this.profileService.getProfile(data.uid)
          .subscribe((profile)=>{
            console.log(profile);
            this.profileProvider = profile.loginType + "-profile";
          });
      }
    })

  }

}
