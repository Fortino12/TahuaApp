import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../services/direction.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { User } from 'src/models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.page.html',
  styleUrls: ['./direction.page.scss'],
})
export class DirectionPage implements OnInit {

  user: User;

  constructor(
    private service:DirectionService,
    private authService: AuthService,
    private alertService: AlertService,
    private locati:Location
    ) { }

  state: any;
  municipality: any;
  location:any;

  ngOnInit() {
    this.service.getStates().subscribe(data=>{
      this.state=data;
      console.log(this.state)
    });
    this.service.getMunicipality().subscribe(data=>{
      this.municipality=data;
      console.log(this.municipality)
    });
    this.service.getLocation().subscribe(data=>{
      this.location=data;
      console.log(this.location)
    }); 
  } 

  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        console.log(user);
        this.user = user;
      }
    );
  }

  adddirection(form: NgForm){
    this.service.Direction(form.value.direccion, form.value.numero, form.value.colonia, form.value.cp, form.value.referencia, form.value.estado_id, form.value.municipio_id, form.value.localidad_id, form.value.user_id).subscribe(
      data=>{
        this.alertService.presentToast(data['message']);
        this.locati.back();
      },
      error=>{
        console.log(error);
      },
      ()=>{
      }
    );
  }

}
