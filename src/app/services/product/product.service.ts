import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  Url='http://tahua.com.mx/api';

  getProduct(id): Observable<any>{
    return this.http.get(this.Url + '/auth/products/' + id)
  }
  getPdf(id): Observable<any>{
    return this.http.get(this.Url + '/auth/pdfs/' + id)
  }
  getProductDetail(id): Observable<any>{
    return this.http.get(this.Url + '/auth/productDetail/' + id)
  }
  gethistoryProduct(id): Observable<any>{
    return this.http.get(this.Url + '/auth/historyProduct/' + id)
  }
  gethistorydf(id): Observable<any>{
    return this.http.get(this.Url + '/auth/historyPdf/' + id)
  }

  addCart(cantidad: Number,user_id: Number, producto_id: Number){
    return this.http.post(this.Url  + 'auth/addcart',
    {cantidad:cantidad, user_id:user_id, producto_id:producto_id}
    )
  }

  delete(producto){
    return this.http.delete(this.Url + '/auth/deletecart/' + producto)
  }

}
