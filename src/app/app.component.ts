import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';//agregar Nav
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//importamos
import { AuthService } from './services/auth/auth.service';
import { AlertService } from './services/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  
  public selectedIndex = 0;
  //cambiar por las pages creadas
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,//agregamos
    private navCtrl: NavController,//agregamos
    private alertService: AlertService //agregamos
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //comentamos el splashscreen
     // this.splashScreen.hide();

     //agregamos
      this.authService.getToken();
    });
  }
  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data['message']);        
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/login');
      }
    );
  }
  ngOnInit() {
   /* const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }*/
  }
}
