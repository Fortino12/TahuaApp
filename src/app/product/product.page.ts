import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { CommentService } from '../services/Comment/comment.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'src/models/user';
import { NgForm } from '@angular/forms';
import { AlertService } from '../services/alert/alert.service';
import { Location } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(
    private act:ActivatedRoute,
    private proService:ProductService, 
    private comService:CommentService,
    private location:Location,
    private alertService:AlertService
    ) { }

    user:User;

  product: Observable<any>;
  comment: Observable<any>;

  ngOnInit() {
    let id=this.act.snapshot.paramMap.get('id');

    this.proService.getProductDetail(id).subscribe(result=>{
      this.product=result;
    });

    this.comService.getComment(id).subscribe(result=>{
      this.comment=result;
    });
  }

  Comment(form: NgForm){
    this.comService.comment(form.value.producto_id, form.value.user_id, form.value.comentario).subscribe(
      data=>{
        this.alertService.presentToast(data['message']);
        this.location.back();
      },
      error=>{
        console.log(error);
      },
      ()=>{
      }
    );
  }
  delete(id){
    this.comService.delete(id).subscribe((data)=>{
      this.alertService.presentToast(data['message']);
        this.location.back();
    });
  }

  addCart(form: NgForm){
    this.proService.addCart(form.value.cantidad,form.value.producto_id, form.value.user_id).subscribe(
      data=>{
        this.alertService.presentToast(data['message']);
        this.location.back();
      },
      error=>{
        console.log(error);
      },
      ()=>{
      }
    );
  }

}
