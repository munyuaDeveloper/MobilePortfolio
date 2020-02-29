import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'redirect',
//   signInSuccessUrl: '/home',
//   callbacks: {
//     signInSuccessWithAuthResult: (authResult, redirectUrl) => {
//       return true;
//     },
//   },
//   signInOptions: [

//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       requireDisplayName: false,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//     {
//       scopes: [
//         'public_profile',
//         'email',
//         'user_likes',
//         'user_friends'
//       ],
//       customParameters: {
//         auth_type: 'reauthenticate'
//       },
//       provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     },
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   ],
//   tosUrl: '/terms',
//   privacyPolicyUrl: 'privacy',
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE,

// };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
