import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { AccountHead } from 'src/app/model/accounthead';
import { GroupModel } from 'src/app/model/group';
import { AccountService } from 'src/app/service/account/account.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})

export class AccountListComponent implements OnInit {
  public accountHeadList: Array<AccountHead> = [];

  constructor(private accountService: AccountService,
    private notificationService: NotificationService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getAccountHeadList();
  }

  public getAccountHeadList() {
    this.accountService.getAccountHeadList()
      .subscribe(data => {
        this.accountHeadList = data;
        return this.accountHeadList;
      });
  }

  public deleteAccount(id: number | undefined) {
    this.accountService.deleteAccount(id)
      .subscribe(data => {
        this.getAccountHeadList();
        this.notificationService.showSuccess(`Account ${id} deleted`, "Success");
      },
        error => { this.notificationService.showError(error.message, "Error"); });
  }

  public editAccount(id: number | undefined): void {
    this.router.navigate(['updateaccount', id]);
  }

  public getGroupName(value: string): string {
    let groupModel: GroupModel[] = [
      { name: "Balance Sheet", value: "Balace_sheet" },
      { name: "Profit Loss", value: "P/l" }
    ]
    return groupModel.filter(item => item.value === value)[0].name;
  }
  
}