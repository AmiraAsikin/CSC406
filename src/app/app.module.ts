import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './news.service';
import { FormsModule } from '@angular/forms';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { EntertainComponent } from './entertain/entertain.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    SportnewsComponent,
    EntertainComponent,
    HealthComponent,
    BusinessComponent,
    TechnologyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
