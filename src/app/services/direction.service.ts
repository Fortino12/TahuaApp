import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private http: HttpClient) { }

  Url='http://tahua.com.mx/api';

  getStates(){
    return this.http.get(this.Url + '/auth/appStates');
  }
  getMunicipality(){
    return this.http.get(this.Url + '/auth/appMunicipality');
  }
  getLocation(){
    return this.http.get(this.Url + '/auth/appLocation');
  }

  Direction(direccion: String, numero: Number,colonia: String,cp: Number, referencia: String, estado_id: Number, municipio_id: Number,localidad_id: Number,user_id:Number) {
    return this.http.post(this.Url + '/auth/adddirection',
      {direccion: direccion, numero: numero, colonia: colonia, cp: cp, referencia: referencia, estado_id: estado_id, municipio_id: municipio_id, localidad_id: localidad_id, user_id: user_id} 
      //modificar los nombres para que coincidan en laravel
    );
  }

}
