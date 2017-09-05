import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tss-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.router.navigateByUrl('/');
    this.authService.logout();
  }

  ngOnInit() {

  }

}
