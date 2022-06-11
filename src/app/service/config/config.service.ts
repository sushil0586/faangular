import { Injectable } from '@angular/core';
import * as ConfigData from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor() { }

  public getConfigData(): any {
    return ConfigData;
  }

  public get getApiUrl():string {
    return this.getConfigData().ApiUrl;
  }

  public get getTokenUrl():string {
    return this.getConfigData().ApiUrl+'auth/login';
  }

  public get getAccountHeadListUrl():string {
    return this.getConfigData().ApiUrl+'financial/accounthead?entity=38';
  }

  public get getAccountHeadUrl():string {
    return this.getConfigData().ApiUrl+'financial/accounthead';
  }

  public get getProductListUrl():string {
    return this.getConfigData().ApiUrl+'inventory/product?entity=38';
  }

  public get getProductUrl():string {
    return this.getConfigData().ApiUrl+'inventory/product';
  }

  public get getEntityUrl():string {
    return this.getConfigData().ApiUrl+'entity/entityadd';
  }

  public get getAuthUserUrl():string {
    return this.getConfigData().ApiUrl+'auth/user';
  }

  public get getProductCategoryUrl():string {
    return this.getConfigData().ApiUrl+'inventory/productcategory?entity=38';
  }

  public get getCountryUrl():string {
    return this.getConfigData().ApiUrl+'geography/country';
  }

  public get getStateUrl():string {
    return this.getConfigData().ApiUrl+'geography/state';
  }

  public get getDistrictUrl():string {
    return this.getConfigData().ApiUrl+'geography/district';
  }

  public get getCityUrl():string {
    return this.getConfigData().ApiUrl+'geography/city';
  }

}