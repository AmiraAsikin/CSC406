import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private _services: NewsService) { }
//display data
technologyDisplay: any = [];
ngOnInit(): void {

  this._services.technology().subscribe((result) => {
    console.log(result);
    this.technologyDisplay = result.articles;
    
  })
}
}