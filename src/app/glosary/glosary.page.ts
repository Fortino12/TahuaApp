import { Component, OnInit } from '@angular/core';
import { GlosaryService} from '../services/glosary/glosary.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-glosary',
  templateUrl: './glosary.page.html',
  styleUrls: ['./glosary.page.scss'],
})
export class GlosaryPage implements OnInit {

  constructor(private service:GlosaryService, private actRoute: ActivatedRoute) { }

  glosary: Observable<any>;

  ngOnInit() {
    let id=this.actRoute.snapshot.paramMap.get('id');

    this.service.getGlosary(id).subscribe(result=>{
      this.glosary=result;
    });
  }
}
