import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public registerForm: FormGroup;

  constructor(public authService: AuthServiceService, public toastController: ToastController) {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      fullname: new FormControl(),
    });
  }

  ngOnInit() {
  }

  async register() {
    await this.authService.signup(this.registerForm.value['email'], this.registerForm.value['password']).then((value) => {
      this.presentToast('You are registered successful', 'success');
    }, err => {
      this.presentToast(err.message, 'danger');
    });
  }
  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      cssClass: 'toast'
    });
    toast.present();
  }
}
