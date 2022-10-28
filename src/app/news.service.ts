import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private _http: HttpClient) { }

  //newsApiUrl
  newsUrl = "https://newsapi.org/v2/top-headlines?country=my&apiKey=5ac6bbd6098d40099cdec035b8d175c0"

  //sportnewsUrl
  sportnewsUrl = "https://newsapi.org/v2/top-headlines?country=my&category=sport&apiKey=5ac6bbd6098d40099cdec035b8d175c0"

  //entertainnewsUrl
  entertainUrl = "https://newsapi.org/v2/top-headlines?country=my&category=entertainment&apiKey=5ac6bbd6098d40099cdec035b8d175c0"

  //healthUrl
  healthUrl = "https://newsapi.org/v2/top-headlines?country=my&category=health&apiKey=5ac6bbd6098d40099cdec035b8d175c0"

  //businesssUrl
  businessUrl = "https://newsapi.org/v2/top-headlines?country=my&category=business&apiKey=5ac6bbd6098d40099cdec035b8d175c0"
 
  //technologysUrl
  technologyUrl = "https://newsapi.org/v2/top-headlines?country=my&category=technology&apiKey=5ac6bbd6098d40099cdec035b8d175c0"
  
  //Page1()
  page1(): Observable<any> {
    return this._http.get(this.newsUrl);
  }

  //sportNews()
  sportNews(): Observable<any> {
    return this._http.get(this.sportnewsUrl);
  }

  //entertain()
  entertain(): Observable<any> {
    return this._http.get(this.entertainUrl);
  }

  //health()
  health(): Observable<any> {
    return this._http.get(this.healthUrl);
  }

  //business()
  business(): Observable<any> {
    return this._http.get(this.businessUrl);
  }

  //technology()
  technology(): Observable<any> {
    return this._http.get(this.technologyUrl);
  }
}
