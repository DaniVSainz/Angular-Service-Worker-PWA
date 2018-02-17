import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import Coffee from '../logic/Coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private data: DataService) { }

  list: [Coffee];

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    });
  }

}
