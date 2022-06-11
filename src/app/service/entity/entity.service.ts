import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Entity, EntityModel } from 'src/app/model/entity';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

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


public addEntity(entityModel: EntityModel): Observable<Entity> {
  return this.httpClient.post<Entity>(this.configService.getEntityUrl, entityModel, this.httpOptions).pipe(
    catchError(error => {
      return throwError(error);
    }));
}


public updateEntity(entityModel: EntityModel, entityId: number | undefined): Observable<Entity> {
  const url = `${this.configService.getEntityUrl}/${entityId}`;

  return this.httpClient.put<Entity>(url, entityModel, this.httpOptions).pipe(
    catchError(error => {
      return throwError(error);
    }));
}




}
