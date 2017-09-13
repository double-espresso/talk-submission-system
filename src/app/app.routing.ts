import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-profile/user-profile' , component: UserProfileComponent},
  { path: 'view-profile', component: ViewProfileComponent},
  { path: 'view-profile/edit-profile', component: EditProfileComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
