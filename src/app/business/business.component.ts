import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _services: NewsService) { }
//display data
businessDisplay: any = [];

  ngOnInit(): void {
    this._services.business().subscribe((result) => {
      console.log(result);
      this.businessDisplay = result.articles;
      
    })
  }
  }