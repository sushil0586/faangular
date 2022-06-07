import { Component, OnInit } from '@angular/core';
import { ProductModel, Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public entity: number =38;
  public productname!: string;
  public productdesc!: string;
  public openingstockqty!: number;
  public openingstockboxqty!: number;
  public openingstockvalue!: number;
  public productcategory!: number;
  public purchaserate!: number;
  public prlesspercentage!: number;
  public mrp!: number;
  public mrpless!: number;
  public salesprice!: number;
  public totalgst!: number;
  public cgst!: number;
  public cgstcess!: number;
  public sgst!: number;
  public sgstcess!: number;




  constructor(private productservice: ProductService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  addproduct()
  {
    if(!this.productname){
      this.notificationService.showError("Please enter name", "Error");
      return;
    }




  const prdmodel: Product = {
    entity: this.entity,
    productname: this.productname,
    productdesc: this.productdesc,
    openingstockqty: this.openingstockqty,
    openingstockboxqty: this.openingstockboxqty,
    openingstockvalue: this.openingstockvalue,
    productcategory: this.productcategory,
    purchaserate: this.purchaserate,
    prlesspercentage: this.prlesspercentage,
    mrp: this.mrp,
    mrpless: this.mrpless,
    salesprice: this.salesprice,
    totalgst: this.totalgst,
    cgst: this.cgst,
    cgstcess: this.cgstcess,
    sgst: this.sgst,
    sgstcess: this.sgstcess,
  }

  this.productservice.addProduct(prdmodel)
  .subscribe(data =>
    this.notificationService.showSuccess("Account Added", "Success")
    ,
    error => { this.notificationService.showError(error.message, "Error"); });



}

  


  reset(): void {
    this.productname = '';
    this.productdesc = '';
    
    // let resetNumberValue!: number;
    // this.code = resetNumberValue;
    }

}
