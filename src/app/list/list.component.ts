import { GeolocationService } from './../geolocation.service';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import Coffee from '../logic/Coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private data: DataService,
              private router: Router,
              private geolocationService:GeolocationService) { }

  list: [Coffee];

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    });
  }

  goToDetails(coffee:Coffee){
    this.router.navigate(['/coffee', coffee._id]);
  }

  goToMap(coffee:Coffee){
    const mapUrl = this.geolocationService.getMapLink(coffee.location);
    location.href = mapUrl;
  }

  shareCoffee(coffee:Coffee){
    const shareText = `I had this coffee at ${coffee.place} and for me it's a ${coffee.rating} star coffee`;
    let newVariable = (window.navigator as any)
    if(newVariable.share){
      newVariable.share({
        title:coffee.name,
        text: shareText,
        url: window.location.href
      }).then( () => {
        console.log('Shared')
      }).catch(() => console.log('error sharing'));
    }else{
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL;
    }
  }

}
