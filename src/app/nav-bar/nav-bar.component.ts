import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tss-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  profileProvider: string;
  private subscription: Subscription;
  constructor(private authService: AuthService,
              private profileService: ProfileService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {

  }

}
