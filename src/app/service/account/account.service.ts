import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { AccountHead, AccountHeadModel } from 'src/app/model/accounthead';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

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

  public getAccountHeadList(): Observable<AccountHead[]> {
    return this.httpClient.get<AccountHead[]>(this.configService.getAccountHeadListUrl, this.httpOptions).pipe(
      tap(_ => this.commonService.log('fetched accounts head')),
      catchError(this.commonService.handleError<AccountHead[]>('getAccounthead', []))
    );
  }

  public getAccountByAccountId(accountId: number | undefined): Observable<AccountHead> {
    const url = `${this.configService.getAccountHeadUrl}/${accountId}`;

    return this.httpClient.get<AccountHead>(url, this.httpOptions).pipe(
      tap(_ => this.commonService.log('fetched accounts heads')),
      catchError(this.commonService.handleError<AccountHead>('getAccountHeads'))
    );
  }

  public addAccount(accountHeadModel: AccountHeadModel): Observable<AccountHead> {
    return this.httpClient.post<AccountHead>(this.configService.getAccountHeadUrl, accountHeadModel, this.httpOptions).pipe(
      catchError(error => {
        return throwError(error);
      }));
  }

  public updateAccount(accountHeadModel: AccountHeadModel, accountId: number | undefined): Observable<AccountHead> {
    const url = `${this.configService.getAccountHeadUrl}/${accountId}`;

    return this.httpClient.put<AccountHead>(url, accountHeadModel, this.httpOptions).pipe(
      catchError(error => {
        return throwError(error);
      }));
  }

  public deleteAccount(id: number | undefined): Observable<AccountHead> {
    const url = `${this.configService.getAccountHeadUrl}/${id}`;
    return this.httpClient.delete<AccountHead>(url, this.httpOptions).pipe(
      catchError(error => {
        return throwError(error);
      }));
  }
}