import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountHead, AccountHeadDropDownModel, AccountHeadModel } from 'src/app/model/accounthead';
import { AccountService } from 'src/app/service/account/account.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})

export class AccountUpdateComponent implements OnInit {
  public accountId!: number;
  public name!: string;
  public code!: number;
  public detilsinbs!: string;
  public balanceType!: string;
  public drcreffect!: string;
  public accountheadsr!: number;
  public description!: string;
  public entityId!: number;
  public group!: string;
  public accountHeadDropDownModelList: Array<AccountHeadDropDownModel> = [];
  public accountHeadList: Array<AccountHead> = [];

  constructor(private route: ActivatedRoute,
    private accountService: AccountService, 
    private notificationService : NotificationService) {
  }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.params['accountId'];
    this.getAccountByAccountId(this.accountId);
  }

  updateAccount() {
    if(!this.name){
      this.notificationService.showError("Please enter namessh", "Error");
      return;
    }

    if(!this.code){
      this.notificationService.showError("Please enter code", "Error");
      return;
    }

    if(!this.description){
      this.notificationService.showError("Please enter description", "Error");
      return;
    }

    if (isNaN(this.code)){
      this.notificationService.showError("Please enter number in code", "Error");
      return;
    }
    
    if (this.code==0){
      this.notificationService.showError("Please dont use zero in code", "Error");
      return;
    }

    if (this.code < 0){
      this.notificationService.showError("Please enter positive number in code", "Error");
      return;
    }

    const accountHeadModel: AccountHeadModel = {
      drcreffect: this.drcreffect,
      accountheadsr: this.accountheadsr,
      balanceType: this.balanceType,
      code: this.code,
      detilsinbs: this.detilsinbs,
      entity: this.entityId,
      group: this.group,
      name: this.name,
      description: this.description,
    }
    this.accountService.updateAccount(accountHeadModel,this.accountId)
      .subscribe(data =>
        this.notificationService.showSuccess("Account Updated", "Success")
        ,
        error => { this.notificationService.showError(error.message, "Error"); });
  }

  public getAccountByAccountId(accountId:number |undefined) {
    this.accountService.getAccountByAccountId(accountId)
      .subscribe(data => {
        console.log(data);
        this.drcreffect = data.drcreffect;
        this.accountheadsr = data.accountheadsr;
        this.balanceType = data.balanceType;
        this.code = data.code;
        this.detilsinbs = data.detilsinbs;
        this.entityId =data.entity;
        this.group = data.group;
        this.name = data.name;
        this.description = data.description;
      });
        this.bindAccountHeadDropDownModelList();
  }

  bindAccountHeadDropDownModelList(): void {
    this.accountService.getAccountHeadList()
      .subscribe(data => {
        this.accountHeadList = data;
        this.accountHeadList.forEach(element => {
          let accountHeadDropDownModel: AccountHeadDropDownModel = {
            accountHeadId: element.id,
            accountHeadName: element.name,
          }
          this.accountHeadDropDownModelList.push(accountHeadDropDownModel);
        });
      });
  }

  reset() {
  }

}

function isNumeric(code: number) {
  throw new Error('Function not implemented.');
}
