import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTokenComponent } from './component/create-token/create-token.component';
import { UnauthorizeComponent } from './component/unauthorize/unauthorize.component';
import { HomeComponent } from './component/home/home.component';
import { RouteconfigComponent } from './component/routeconfig/routeconfig.component';
import { AccountHeadAddComponent } from './component/accounthead/accounthead-add/accounthead-add.component';
import { AccountHeadListComponent } from './component/accounthead/accounthead-list/accounthead-list.component';
import { AccountHeadUpdateComponent } from './component/accounthead/accounthead-update/accounthead-update.component';
import { ProductAddComponent } from './component/product/product-add/product-add.component';
import { EntityAddComponent } from './component/entity/entity-add/entity-add.component';
import { PurchaseorderAddComponent } from './component/invoice/purchaseorder/purchaseorder-add/purchaseorder-add.component';
import { PurchaseorderListComponent } from './component/invoice/purchaseorder/purchaseorder-list/purchaseorder-list.component';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AccountHeadAddComponent,
    CreateTokenComponent,
    UnauthorizeComponent,
    HomeComponent,
    RouteconfigComponent,
    AccountHeadUpdateComponent,
    AccountHeadListComponent,
    ProductAddComponent,
    EntityAddComponent,
    PurchaseorderAddComponent,
    PurchaseorderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    DialogModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }