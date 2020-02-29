import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscribe: any;
  constructor(public afAuth: AngularFireAuth, public platform: Platform, private _route: Router) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
    if (this.constructor.name === 'HomePage') {
      if (window.confirm('Do you want to exit app?')) {
        navigator['app'].exitApp();
      }
    } else {
      this._route.navigate(['/home']);
    }
  });
  }

}
