import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Coffee from '../logic/Coffee';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  routingSubscription:any;
  coffee: Coffee;
  
  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params =>{
      console.log(params["id"]);
    });
  }

  ngOnDestory(){
    this.routingSubscription.ubsubscribe();
  }

}
