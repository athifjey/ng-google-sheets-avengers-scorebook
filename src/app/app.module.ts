import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BattingStatsComponent } from './components/batting-stats/batting-stats.component';

@NgModule({
  declarations: [AppComponent, BattingStatsComponent],
  imports: [
    AccordionModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
