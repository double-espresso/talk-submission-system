import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { TwitterProfileComponent } from './twitter-profile/twitter-profile.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavBarComponent,
    AddItemsComponent,
    EditItemsComponent,
    HomeComponent,
    TwitterProfileComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
  ],
  providers: [FirebaseService, AuthService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
