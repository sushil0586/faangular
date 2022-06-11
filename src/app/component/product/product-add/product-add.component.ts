import { Component, OnInit } from '@angular/core';
import { ProductModel, Product,ProductCategoryList } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent implements OnInit {

  public entity: number = 1;
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
  public ProductCategoryDDList: Array<ProductCategoryList> = [];

  constructor(private productservice: ProductService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.bindProductCategoryList();
  }

  addproduct() {
    if (!this.productname) {
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
        this.notificationService.showSuccess("Product Added", "Success")
        ,
        error => { this.notificationService.showError(error.message, "Error"); });
  }

  reset(): void {
    this.productname = '';
    this.productdesc = '';
 }

 bindProductCategoryList(): void {
  this.productservice.getProductCategoryList()
    .subscribe(data => {
      this.ProductCategoryDDList = data;
      console.log(data)
      // this.ProductCategoryDDList.forEach(element => {
      //   let accountHeadDropDownModel: ProductCategoryList = {
      //     id: element.id,
      //     pcategoryname: element.pcategoryname,
      //   }
      //   this.ProductCategoryDDList.push(accountHeadDropDownModel);
      // });
    });
}

}