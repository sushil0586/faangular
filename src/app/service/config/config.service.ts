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
    return this.getConfigData().ApiUrl+'financial/accounthead?entity=1';
  }

  public get getAccountHeadUrl():string {
    return this.getConfigData().ApiUrl+'financial/accounthead';
  }
}