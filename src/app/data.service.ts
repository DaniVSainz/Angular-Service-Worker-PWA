import { Injectable } from '@angular/core';
import Coffee from './logic/Coffee';
import PlaceLocation from './logic/PlaceLocation';
import {Http} from '@angular/http'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://192.168.1.155:3000"

  get(coffeeId: string, callback){
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`).subscribe(response => {
      callback(response.json());
    });
  };

  getList(callback){
    this.http.get(`${this.endpoint}/coffees`).subscribe(response => {
      console.log(response.json());
      callback(response.json());
    })
  }

  save(coffee, callback){
    //Todo change it with a real web service
    if(coffee._id){
      //its a update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee).subscribe(response => {
        callback(true);
      });
    }else{
      //its a insert
      this.http.post(`${this.endpoint}/coffees`, coffee).subscribe(response => {
        callback(true);
      });
    }
  }
}
