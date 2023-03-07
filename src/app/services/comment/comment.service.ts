import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  Url='http://tahua.com.mx/api';

  getComment(id): Observable<any>{
    return this.http.get(this.Url + '/auth/commentProduct/' + id);
  }

  comment(producto_id:Number,user_id:Number, comentario:String){
    return this.http.post(this.Url + '/auth/appaddcomment',
    {producto_id:producto_id, user_id:user_id, comentario:comentario}
    );
  }
  delete(id){
    return this.http.delete(this.Url + '/auth/deletecomment/' + id);
  }
}
