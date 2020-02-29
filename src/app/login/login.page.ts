
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public modelController: ModalController,
    public authService: AuthServiceService,
    public toastController: ToastController,
    private route: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  async login() {
    await this.authService.login(this.loginForm.value['email'], this.loginForm.value['password']).then(res => {
      console.log(res);
      this.presentToast('Logged in successful', 'success');
      // this.route.navigate(['/home']);
    }, err => {
      console.log(err.message);
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
