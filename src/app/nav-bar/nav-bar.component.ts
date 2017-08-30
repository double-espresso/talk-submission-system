import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
    console.log(this.auth.user);
  }

}
