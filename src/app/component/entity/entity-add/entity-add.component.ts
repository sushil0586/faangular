import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/service/entity/entity.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-entity-add',
  templateUrl: './entity-add.component.html',
  styleUrls: ['./entity-add.component.scss']
})

export class EntityAddComponent implements OnInit {

  public entityId: number = 1;
  public entityName!: string;
  public address!: string;
  public ownerName!: string;
  public phoneoffice!: string;
  public phoneResidence!: number;
  public panno!: string;
  public tds!: string;
  public tdsCircle!: string;
  public unitType!: number;
  public Country!: number;
  public state!: number;
  public district!: number;
  public city!: number;

  constructor(private entityService: EntityService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  addEntity() {
    if (!this.entityName) {
      this.notificationService.showError("Please enter name", "Error");
      return;
    }
  }

}