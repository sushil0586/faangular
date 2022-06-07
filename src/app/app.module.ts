import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './component/account/account.component';
import { AddAccountComponent } from './component/add-account/add-account.component';
import { AccountListComponent } from './component/account-list/account-list.component';
import { FormsModule } from '@angular/forms';
import { CreateTokenComponent } from './component/create-token/create-token.component';
import { UnauthorizeComponent } from './component/unauthorize/unauthorize.component';
import { HomeComponent } from './component/home/home.component';
import { RouteconfigComponent } from './component/routeconfig/routeconfig.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountUpdateComponent } from './component/account-update/account-update.component';

import { AddProductComponent } from './component/add-product/add-product/add-product.component';
import { AddEntityComponent } from './component/add-entity/add-entity/add-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AddAccountComponent,
    AccountListComponent,
    CreateTokenComponent,
    UnauthorizeComponent,
    HomeComponent,
    RouteconfigComponent,
    AccountUpdateComponent,
 
    AddProductComponent,
       AddEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
