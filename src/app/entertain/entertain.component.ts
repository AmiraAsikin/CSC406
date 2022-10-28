import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.css']
})
export class EntertainComponent implements OnInit {

  constructor(private _services: NewsService) { }
//display data
entertainDisplay: any = [];

  ngOnInit(): void {
    this._services.entertain().subscribe((result) => {
      console.log(result);
      this.entertainDisplay = result.articles;
      
    })
  }
  }