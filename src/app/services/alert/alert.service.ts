import { Injectable } from '@angular/core';
//agregamos
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  //declaramos dentro del constructor
  constructor(private toastController: ToastController) { }

  //creamos este método
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    console.log(toast);
    toast.present();
  }
}
