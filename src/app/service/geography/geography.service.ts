import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Country, State,District,City } from 'src/app/model/geography';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class GeographyService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(private httpClient: HttpClient, 
  private commonService: CommonService,
  private configService: ConfigService) {
  const token = sessionStorage.getItem('a-token');
  if (token) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
    };
  }
}

public getCountryList(): Observable<Country[]> {
  return this.httpClient.get<Country[]>(this.configService.getCountryUrl, this.httpOptions).pipe(
    tap(_ => this.commonService.log('fetched accounts head')),
    catchError(this.commonService.handleError<Country[]>('getAccounthead', []))
  );
}

public getStateList(accountId: number | undefined): Observable<State[]> {

  const url = `${this.configService.getStateUrl}?country=${accountId}`;

  return this.httpClient.get<State[]>(url, this.httpOptions).pipe(
    tap(_ => this.commonService.log('fetched accounts head')),
    catchError(this.commonService.handleError<State[]>('getAccounthead', []))
  );
}

public getDisttList(accountId: number | undefined): Observable<District[]> {
  const url = `${this.configService.getDistrictUrl}?state=${accountId}`;
  console.log(url)
  return this.httpClient.get<District[]>(url, this.httpOptions).pipe(
    tap(_ => this.commonService.log('fetched accounts head')),
    catchError(this.commonService.handleError<District[]>('getAccounthead', []))
  );
}

public getCityList(accountId: number | undefined): Observable<City[]> {
  const url = `${this.configService.getCityUrl}?distt=${accountId}`;
  return this.httpClient.get<City[]>(url, this.httpOptions).pipe(
    tap(_ => this.commonService.log('fetched accounts head')),
    catchError(this.commonService.handleError<City[]>('getAccounthead', []))
  );
}


}
