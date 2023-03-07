import { Component, OnInit } from '@angular/core';
import { GlosaryService } from '../services/glosary/glosary.service';


@Component({
  selector: 'app-glosaries',
  templateUrl: './glosaries.page.html',
  styleUrls: ['./glosaries.page.scss'],
})
export class GlosariesPage implements OnInit {

  constructor(private service:GlosaryService) { }

  glosary: any;
  
  ngOnInit() {

    this.service.getGlosaries().subscribe(data => {
      this.glosary = data;
      console.log(this.glosary);
    });

  }

}
