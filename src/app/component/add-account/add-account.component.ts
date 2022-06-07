import { Component, OnInit } from '@angular/core';
import { AccountHead, AccountHeadDropDownModel, AccountHeadModel } from 'src/app/model/accounthead';
import { AccountService } from 'src/app/service/account/account.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})

export class AddAccountComponent implements OnInit {
  public entityId: number =38;
  public name!: string;
  public code!: number;
  public detilsinbs: string = "Yes";
  public balanceType: string = "Credit";
  public description!: string;
  public drcreffect: string = "Yes";
  public accountheadsr: number = 0;
  public group: string = "Balance_sheet";
  public accountHeadDropDownModelList: Array<AccountHeadDropDownModel> = [];
  public accountHeadList: Array<AccountHead> = [];

  constructor(private accountService: AccountService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.bindAccountHeadDropDownModelList();
  }

  addAccount() {
    if(!this.name){
      this.notificationService.showError("Please enter name", "Error");
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
      entity: this.entityId,
      name: this.name,
      code: this.code,
      detilsinbs: this.detilsinbs,
      balanceType: this.balanceType,
      description: this.description,
      drcreffect: this.drcreffect,
      accountheadsr: this.accountheadsr,
      group: this.group,
    }

    this.accountService.addAccount(accountHeadModel)
      .subscribe(data =>
        this.notificationService.showSuccess("Account Added", "Success")
        ,
        error => { this.notificationService.showError(error.message, "Error"); });
  }

  reset(): void {
  this.name = '';
  let resetNumberValue!: number;
  this.code = resetNumberValue;
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
}