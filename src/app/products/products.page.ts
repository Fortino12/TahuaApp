import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import {  Observable} from 'rxjs';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Observable<any>;
  pdfs: Observable<any>;
  category: Observable<any>;

  selectedSlide: any;
  segment=0;
  sliderOptions={
    initalSlide: 0,
    slidesPerView: 1,
    speed: 400
  }

  constructor(private actRoute:ActivatedRoute, private service:CategoryService, private proService:ProductService) { }

  ngOnInit() {

    let id=this.actRoute.snapshot.paramMap.get('id');

    this.proService.getProduct(id).subscribe(result=>{
      this.products=result;
      console.log(this.products)
    });

    this.proService.getPdf(id).subscribe(result=>{
      this.pdfs=result;
      console.log(this.pdfs)
    });

    this.service.getCategoryId(id).subscribe(result =>{
      this.category=result;
    });

  }

  async segmentChanged(ev){
    await this.selectedSlide.slideTo(this.segment);
  }
  async slideShanged(slides: IonSlides){
    this.selectedSlide=slides;
    slides.getActiveIndex().then(selectedIndex=>{
      this.segment=selectedIndex;
    });
}
}
