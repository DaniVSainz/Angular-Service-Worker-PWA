import { DataService } from './../data.service';
import { GeolocationService } from './../geolocation.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import Coffee from '../logic/Coffee';
import TastingRating from '../logic/TastingRating'
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private geoLocation:GeolocationService,
              private router:Router,
              private dataService:DataService) { }

  routingSubscription:any;
  coffee: Coffee;
  types = ["Espresso","Ristretto","Americano","Cappyccino"];
  tastingEnabled: boolean = false;

  tastingRatingChanged(checked:boolean){
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    }else{
      this.coffee.tastingRating = null;
    }
  }


  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params =>{
      console.log(params["id"]);
      if(params['id']){
        this.dataService.get(params["id"], response =>{
          this.coffee = response ;
          if(this.coffee.tastingRating){
            this.tastingEnabled = true;
          }
        })
      }
    });

    this.geoLocation.requestLocation(location =>{
      if(location){
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    })
  }

  ngOnDestory(){
    this.routingSubscription.ubsubscribe();
  }

  save(){
    this.dataService.save(this.coffee, result => {
      if(result){
        this.router.navigate(['/']);
      };
    });
  };

  cancel(){
    this.router.navigate(["/"])
  }

}
