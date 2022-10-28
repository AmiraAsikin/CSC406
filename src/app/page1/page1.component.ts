import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']

})
export class Page1Component implements OnInit {

  constructor(private _services: NewsService) { }


  //display data
  page1Display: any = [];

  ngOnInit(): void {

    this._services.page1().subscribe((result) => {
      console.log(result);
      this.page1Display = result.articles;
      
    })
  }
}