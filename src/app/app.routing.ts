import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { HomeComponent } from './home/home.component';
import { TwitterProfileComponent } from './twitter-profile/twitter-profile.component';
import { FacebookProfileComponent } from './facebook-profile/facebook-profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'twitter-profile', component: TwitterProfileComponent},
  { path: 'facebook-profile', component: FacebookProfileComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
