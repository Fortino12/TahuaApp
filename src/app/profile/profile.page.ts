import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private service:AuthService, private actRoute: ActivatedRoute, private prodService:ProductService) { }

  user: Observable<any>;
  product: Observable<any>;
  pdf: Observable<any>;

  ngOnInit() {
    let id=this.actRoute.snapshot.paramMap.get('id');

    this.service.getProfile(id).subscribe(result=>{
      this.user=result;
      console.log(this.user)
    });
    this.prodService.gethistoryProduct(id).subscribe(result=>{
      this.product=result;
      console.log(this.product)
    });
    this.prodService.gethistorydf(id).subscribe(result=>{
      this.pdf=result;
      console.log(this.pdf)
    });
  } 

}
