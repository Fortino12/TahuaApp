import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
 
  Url='http://tahua.com.mx/api';

  getCategories(){
    return this.http.get(this.Url + '/auth/appcategories')
  }

  getCategoryId(id): Observable<any>{
    return this.http.get(this.Url + '/auth/appcategory/' + id);
  }

}
