import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  mapa: Mapboxgl.Map;
  lng='';
  lat='';
  constructor( private geo:Geolocation) { }


  ngOnInit() {
    this.loadMap();
  }
  async loadMap(){
    const rta= await this.geo.getCurrentPosition();
    const myLating={
      lng: rta.coords.longitude,
      lat: rta.coords.latitude
    };
    console.log(myLating);

    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-box', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: myLating, // Lng, Lat
    zoom: 15 // starting zoom
    });
    
    const marker = new Mapboxgl.Marker({
      draggable:true
    })
    .setLngLat(myLating)
    .addTo(this.mapa);

    var nav = new Mapboxgl.NavigationControl();
     
    var directions = new MapboxDirections({
      accessToken: environment.mapboxKey
    })

    this.mapa.addControl(directions,'top-right');
    this.mapa.addControl(nav,'top-left');
    
  }

}
