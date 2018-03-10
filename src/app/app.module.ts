import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const firebaseConfig = {
  apiKey: "AIzaSyBJLyQ60qZuZlLvmc7Sfzyl73RC_UIKhCk",
  authDomain: "mlservice-197315.firebaseapp.com",
  databaseURL: "https://mlservice-197315.firebaseio.com",
  projectId: "mlservice-197315",
  storageBucket: "mlservice-197315.appspot.com",
  messagingSenderId: "875795430069"
};

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
