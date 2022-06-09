import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchaseorder-add',
  templateUrl: './purchaseorder-add.component.html',
  styleUrls: ['./purchaseorder-add.component.scss']
})

export class PurchaseorderAddComponent implements OnInit {

  public newDate: Date = new Date();
  public todayDate:Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}