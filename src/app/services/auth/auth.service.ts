import { Injectable } from '@angular/core';
//importamos
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from '../env/env.service';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //agregamos
  isLoggedIn = false;
  token:any;

  Url='http://tahua.com.mx/api/';

  constructor( private http: HttpClient,private storage: NativeStorage,private env: EnvService,) { }

  //creamos los métodos siguientes
  login(email: String, password: String) {
    return this.http.post(this.Url + 'auth/applogin',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  register(name: String, paterno: String,materno: String,edad: Number, email: String, password: String) {
    return this.http.post(this.Url + 'auth/appregister',
      {name: name, paterno: paterno, materno: materno, edad: edad, email: email, password: password} 
      //modificar los nombres para que coincidan en laravel
    )
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.Url + 'auth/applogout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(this.Url + 'auth/appuser', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
       // console.log(data);
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }

  getProfile(id): Observable<any>{
    return this.http.get(this.Url + 'auth/profile/' + id);
  } 
}
