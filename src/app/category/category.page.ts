import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private service:CategoryService) { }

  category: any;
  
  ngOnInit() {

    this.service.getCategories().subscribe(data => {
      this.category = data;
      console.log(this.category);
    });

  }

}
