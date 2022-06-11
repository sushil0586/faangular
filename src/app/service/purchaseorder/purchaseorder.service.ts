import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

import { Supplier, Voucher } from 'src/app/model/common';
import { Product } from 'src/app/model/common';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})

export class PurchaseorderService {

  constructor(private configService: ConfigService,
    private httpClient: HttpClient,
    private commonService: CommonService) {
  }

  public getVoucherNumber(entityId: number): Observable<Voucher> {
    const url = `${this.configService.getVoucherNumberUrl}${entityId}`;

    return this.httpClient.get<Voucher>(url, this.commonService.httpOptions).pipe(
      tap(_ => this.commonService.log('fetched voucher number')),
      catchError(this.commonService.handleError<Voucher>('getVoucherNumber'))
    );
  }

  public getSupplierList(entityId: number): Observable<Array<Supplier>> {
    const url = `${this.configService.getSupplierListUrl}${entityId}`;

    return this.httpClient.get<Array<Supplier>>(url, this.commonService.httpOptions).pipe(
      tap(_ => this.commonService.log('fetched supplier list')),
      catchError(this.commonService.handleError<Array<Supplier>>('getSupplierList'))
    );
  }

  public getProductList(entityId: number): Observable<Array<Product>> {
    const url = `${this.configService.getCommonProductListUrl}${entityId}`;

    return this.httpClient.get<Array<Product>>(url, this.commonService.httpOptions).pipe(
      tap(_ => this.commonService.log('fetched product list')),
      catchError(this.commonService.handleError<Array<Product>>('getProductList'))
    );
  }
}