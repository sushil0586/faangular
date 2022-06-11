import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/service/entity/entity.service';
import { GeographyService } from 'src/app/service/geography/geography.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { Entity, EntityModel } from 'src/app/model/entity';
import { Country, State,District,City } from 'src/app/model/geography';

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
  public phoneoffice!: number;
  public phoneResidence!: number;
  public panno!: string;
  public tds!: string;
  public tdsCircle!: string;
  public unitType!: number;
  public Country: number = 1;
  public state!: number;
  public district!: number;
  public city!: number;
  public CountryList:  Array<Country> = [];;
  public stateList:  Array<State> = [];;
  public districtList:  Array<District> = [];;
  public cityList:  Array<City> = [];;

  constructor(private entityService: EntityService, private notificationService: NotificationService,private geographyService: GeographyService) { }

  ngOnInit(): void {
    this.bindCountryList();
    this.bindStateList(1);
    this.bindDistrictList(1);
    // this.bindCityList(1);
  }

  addEntity() {
    if (!this.entityName) {
      this.notificationService.showError("Please enter name", "Error");
      return;
    }

    const prdmodel: EntityModel = {
      entityName: this.entityName,
      address: this.address,
      ownerName: this.ownerName,
      phoneoffice: this.phoneoffice,
      phoneResidence: this.phoneResidence,
      panno: this.panno,
      tds: this.tds,
      tdsCircle: this.tdsCircle,
      unitType: this.unitType,
      Country: this.Country,
      state: this.state,
      district: this.district,
      city: this.city,
      }
  
    this.entityService.addEntity(prdmodel)
    .subscribe(data =>
      this.notificationService.showSuccess("Account Added", "Success")
      ,
      error => { this.notificationService.showError(error.message, "Error"); });
  }

  

  bindCountryList(): void {
    this.geographyService.getCountryList()
      .subscribe(data => {
        this.CountryList = data;
        console.log(data)
      });
  }
  bindStateList(id: number): void {
    this.geographyService.getStateList(id)
      .subscribe(data => {
        this.stateList = data;
        console.log(data)
      });
  }

  bindDistrictList(id: number): void {
    this.geographyService.getDisttList(id)
      .subscribe(data => {
        this.districtList = data;
        console.log(data)
      });
  }


  bindCityList(id: number): void {
    this.geographyService.getCityList(id)
      .subscribe(data => {
        this.cityList = data;
        console.log(data)
      });
  }

  updateObj(id: string) {
    alert(id)
  }


  

}