import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  Url='http://tahua.com.mx/api';

  getCart(id):Observable<any>{
    return this.http.get(this.Url + '/auth/carts/' + id);
  }

  delete(id){
    return this.http.delete(this.Url + '/auth/deletCart/' + id);
  }
}
 