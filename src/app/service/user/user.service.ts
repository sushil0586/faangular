import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { UserEntitiy } from 'src/app/model/user';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  public getUserEntityData(): Observable<Array<UserEntitiy>> {
    const url = `${this.configService.getAuthUserUrl}`;

    return this.httpClient.get<Array<UserEntitiy>>(url, this.httpOptions).pipe(
      tap(_ => this.commonService.log('fetched user entities')),
      catchError(this.commonService.handleError<Array<UserEntitiy>>('getUserEntities'))
    );
  }

}