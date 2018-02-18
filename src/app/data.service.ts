import { Injectable } from '@angular/core';
import Coffee from './logic/Coffee';
import PlaceLocation from './logic/PlaceLocation';
import {Http} from '@angular/http'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://localhost:3000"

  getList(callback){
    // const list = [
    //   new Coffee('Double Espresso','Sunny Cafe', new PlaceLocation("123 Market ST","San Francisco")),
    //   new Coffee('Caramel Americano','StarCoffee', new PlaceLocation("Gran Via 34","Madrid")),
    // ];
    // callback(list);
    this.http.get(`${this.endpoint}/coffees`).subscribe(response => {
      console.log(response.json());
      callback(response.json());
    })
  }

  save(coffee, callback){
    //Todo change it with a real web service
    if(coffee._id){
      //its a update
      this.http.put(`${this.endpoint}/coffes/${coffee._id}`, coffee).subscribe(response => {
        callback(true);
      });
    }else{
      //its a insert
      this.http.post(`${this.endpoint}/coffes/${coffee}`, coffee).subscribe(response => {
        callback(true);
      });
    }
  }
}
