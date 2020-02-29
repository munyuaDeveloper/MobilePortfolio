
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe((user) => {
        if (user) {
          resolve(true);
        } else {
          this.navCtrl.navigateRoot(['']);
          resolve(false);
        }
      })
    });
  }
}