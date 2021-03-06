import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'tss-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {

  }

}
