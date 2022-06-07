import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { ProductModel, Product } from 'src/app/model/product';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

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

public getProductList(): Observable<ProductModel[]> {
  return this.httpClient.get<ProductModel[]>(this.configService.getProductListUrl, this.httpOptions).pipe(
    tap(_ => this.commonService.log('fetched accounts head')),
    catchError(this.commonService.handleError<ProductModel[]>('getproducts', []))
  );
}

public getProductByProductId(productId: number | undefined): Observable<Product> {
  const url = `${this.configService.getProductUrl}/${productId}`;

  return this.httpClient.get<Product>(url, this.httpOptions).pipe(
    tap(_ => this.commonService.log('fetched products')),
    catchError(this.commonService.handleError<Product>('getproducts'))
  );
}


public addProduct(productModel: ProductModel): Observable<Product> {
  console.log(productModel)
  return this.httpClient.post<Product>(this.configService.getProductUrl, productModel, this.httpOptions).pipe(
    catchError(error => {
      return throwError(error);
    }));
}


public updateAccount(productModel: ProductModel, productId: number | undefined): Observable<Product> {
  const url = `${this.configService.getProductUrl}/${productId}`;

  return this.httpClient.put<Product>(url, productModel, this.httpOptions).pipe(
    catchError(error => {
      return throwError(error);
    }));
}





}
