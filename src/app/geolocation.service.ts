import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }


  requestLocation(callback){
    //W3C Geolocation API 
    navigator.geolocation.getCurrentPosition(
      //These are the two callbacks, if you check inside of getCurrentPosition help notes it shows them
      position => {
        callback(position.coords);
      },
      error => {
        callback(null);
      }
    );
  }

  getMapLink(location){
    let query = "";
    if(location.latitude){
      query = `${location.latitude} + , + ${location.longitude}`;
    }else{
      query = `${location.address} + , + ${location.city}`;
    }

    
    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`;
    }else{
      return `https://maps.google.com/?q=${query}`;
    }

  }

}
