import { Injectable } from '@angular/core';
import Coffee from './logic/Coffee';


@Injectable()
export class DataService {

  constructor() { }


  getList(callback){
    const list = [
      new Coffee('Double Espresso','Sunny Cafe', new PlaceLocation()),
      new Coffee(),
    ]
  }

  save(coffee, callback){

  }
}
