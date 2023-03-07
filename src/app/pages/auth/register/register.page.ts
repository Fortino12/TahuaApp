import { Component, OnInit } from '@angular/core';
//importamos
import {  NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

 

  ngOnInit() {
  }

  register(form: NgForm) {
    this.authService.register(form.value.name, form.value.paterno, form.value.materno, form.value.edad,form.value.email, form.value.password).subscribe(
           data => {
        this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.navCtrl.navigateRoot('/dashboard');
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    );
  }

}
