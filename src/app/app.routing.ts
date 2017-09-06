import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { HomeComponent } from './home/home.component';
import { TwitterProfileComponent } from './twitter-profile/twitter-profile.component';
import { FacebookProfileComponent } from './facebook-profile/facebook-profile.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GoogleProfileComponent } from './google-profile/google-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-profile/twitter-profile', component: TwitterProfileComponent},
  { path: 'view-profile/facebook-profile', component: FacebookProfileComponent},
  { path: 'view-profile/github-profile', component: GithubProfileComponent},
  { path: 'view-profile/google-profile', component: GoogleProfileComponent},
  { path: 'view-profile', component: ViewProfileComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
