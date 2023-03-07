import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts/carts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-canast',
  templateUrl: './canast.page.html',
  styleUrls: ['./canast.page.scss'],
})
export class CanastPage implements OnInit {

  constructor(private cart:CartsService, private actRoute:ActivatedRoute,private location:Location,private alertService:AlertService) { } 

  products: Observable<any>;

  ngOnInit() {
    let id=this.actRoute.snapshot.paramMap.get('id');

    this.cart.getCart(id).subscribe(result=>{
      this.products=result;
      console.log(this.products)
    })
  }

  delete(id){
    this.cart.delete(id).subscribe((data)=>{
      this.alertService.presentToast(data['message']);
        this.location.back();
    });
  }
}
