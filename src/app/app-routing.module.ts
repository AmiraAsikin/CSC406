import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { EntertainComponent } from './entertain/entertain.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '',component:Page1Component}, //home
  {path: 'Business',component:BusinessComponent}, //Business News
  {path: 'Entertain',component:EntertainComponent}, //Entertainment News
  {path: 'Health',component:HealthComponent}, //Health News
  {path: 'Technology',component:TechnologyComponent}, //Technology News
  {path: 'Sport',component:SportnewsComponent}, //Sport News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
