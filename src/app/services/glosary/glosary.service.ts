import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlosaryService {

  

  constructor(private http: HttpClient) { }

  Url='http://tahua.com.mx/api/';

  getGlosary(id): Observable<any>{
    return this.http.get(this.Url + 'auth/glo/' + id);
  }
  getGlosaries(){
    return this.http.get(this.Url + 'auth/glosaries/');
  }
}
