import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';

import { environment, environment1 } from '../../../environments/environment';
import {
  Character,
  characterAttributesMapping,
  sheet6AttributesMapping
} from '../../character.model';

@Component({
  selector: 'avengers-batting-stats',
  templateUrl: './batting-stats.component.html',
  styleUrls: ['./batting-stats.component.scss']
})
export class BattingStatsComponent implements OnInit {

  characters$: Observable<Character[]>;
  sheet6$: Observable<any>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
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