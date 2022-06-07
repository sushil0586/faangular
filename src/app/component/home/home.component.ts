import { Component, OnInit } from '@angular/core';
import { UserEntitiy } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public userentity!:UserEntitiy;
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserEntityData();
  }

  public getUserEntityData() {
    this.userService.getUserEntityData()
      .subscribe(data => {
        this.userentity = data[0];
        return this.userentity;
      });
  }
}