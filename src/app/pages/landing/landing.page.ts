import { Component, OnInit } from '@angular/core';
//importaciones
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  //declaramos dentro del constructor
  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
  ) {
    this.menu.enable(false);
   }

    //agregamos

    ionViewWillEnter() {
      this.authService.getToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.navCtrl.navigateRoot('/dashboard');
        }
      });
    }

  ngOnInit() {
  }

  //agregamos los métodos
  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

}
