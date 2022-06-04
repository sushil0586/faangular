import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Token } from 'src/app/model/token';
import { User } from 'src/app/model/user';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, 
    private commonService:CommonService,
    private configService:ConfigService) { }

  public getToken(user: User): Observable<Token> {
   return  this.httpClient.post<Token>(this.configService.getTokenUrl, user, this.httpOptions).pipe(
      tap((newToken: Token) => this.commonService.log(`Create=${newToken.token}`)),
      catchError(this.commonService.handleError<Token>('createToken'))
    );
  }
}