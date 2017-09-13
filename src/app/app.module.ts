import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { TwitterProfileComponent } from './twitter-profile/twitter-profile.component';
import { FacebookProfileComponent } from './facebook-profile/facebook-profile.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GoogleProfileComponent } from './google-profile/google-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TwitterProfileComponent,
    FacebookProfileComponent,
    GithubProfileComponent,
    GoogleProfileComponent,
    ViewProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
  ],
  providers: [AuthService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
