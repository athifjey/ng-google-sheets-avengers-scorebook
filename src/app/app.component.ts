import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { environment, environment1 } from '../environments/environment';
import {
  Character,
  characterAttributesMapping,
  sheet6AttributesMapping
} from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  characters$: Observable<Character[]>;
  sheet6$: Observable<any>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<Character>(
      environment.characters.spreadsheetId,
      environment.characters.worksheetName,
      characterAttributesMapping,
      'Active'
    );

    // Test below this
    this.googleSheetsDbService
      .getActive<Character>(
        environment.characters.spreadsheetId,
        environment.characters.worksheetName,
        characterAttributesMapping,
        'Active'
      )
      .subscribe(val => console.log('ennavo po', val));

    this.sheet6$ = this.googleSheetsDbService.get<any>(
      environment1.characters.spreadsheetId,
      environment1.characters.worksheetName,
      sheet6AttributesMapping
    );

    this.googleSheetsDbService
      .get<any>(
        environment1.characters.spreadsheetId,
        environment1.characters.worksheetName,
        sheet6AttributesMapping
      )
      .subscribe(val => console.log('test', val));
  }
}
