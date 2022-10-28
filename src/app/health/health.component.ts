import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _services: NewsService) { }
//display data
healthDisplay: any = [];

  ngOnInit(): void {
    this._services.health().subscribe((result) => {
      console.log(result);
      this.healthDisplay = result.articles;
      
    })
  }
  }
