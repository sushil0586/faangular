import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/common';
import { Product } from 'src/app/model/common';
import { PurchaseorderService } from 'src/app/service/purchaseorder/purchaseorder.service';

@Component({
  selector: 'app-purchaseorder-add',
  templateUrl: './purchaseorder-add.component.html',
  styleUrls: ['./purchaseorder-add.component.scss']
})

export class PurchaseorderAddComponent implements OnInit {

  public newDate: Date = new Date();
  public todayDate: Date = new Date();
  public billDate!: Date;
  public inputDtDate!: Date;
  public dueDate!: Date;
  public dayName: string = this.getDayName();
  public display: boolean = false;
  public voucherNumber!: number;
  public supplierId: number = 0;
  public supplierList: Array<Supplier> = [];
  public productList: Array<Product> = [];
  public gstNumber!: string;
  public productId!:number;

  constructor(private purchaseOrderService: PurchaseorderService) {
  }

  ngOnInit(): void {
    this.getVoucherNumber();
    this.bindSupplierList();
  }

  public showDialog() {
    this.display = true;
    this.bindProductList();
  }

  public showDayName() {
    this.dayName = this.getDayName();
  }

  public getDayName(): string {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this.newDate.getDay()];
  }

  public getVoucherNumber() {
    this.purchaseOrderService.getVoucherNumber(1)
      .subscribe(data => {
        this.voucherNumber = data.Newvoucher;
      });
  }

  public bindSupplierList() {
    this.purchaseOrderService.getSupplierList(1)
      .subscribe(data => {
        this.supplierList = data;
      });
  }

  public displaySupplier(supplierId: number) {
    const supplierList = this.supplierList.filter(supplier => supplier.id == supplierId);
    if (supplierList.length === 0) {
      this.gstNumber = "";
      return;
    }
    this.gstNumber = supplierList[0].gstno;
  }

  public bindProductList() {
    this.purchaseOrderService.getProductList(1)
      .subscribe(data => {
        console.log(data);
        this.productList = data;
      });
  }

}