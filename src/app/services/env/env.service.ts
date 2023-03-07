import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  //agregamos
  API_URL = "http://localhost:8000/api/";
  constructor() { }
}
