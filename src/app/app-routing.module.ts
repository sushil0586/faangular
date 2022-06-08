import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateTokenComponent } from './component/create-token/create-token.component';
import { HomeComponent } from './component/home/home.component';
import { UnauthorizeComponent } from './component/unauthorize/unauthorize.component';
import { AuthGuard } from './guard/auth.guard';
import { AccountHeadListComponent } from './component/accounthead/accounthead-list/accounthead-list.component';
import { AccountHeadUpdateComponent } from './component/accounthead/accounthead-update/accounthead-update.component';
import { AccountHeadAddComponent } from './component/accounthead/accounthead-add/accounthead-add.component';
import { ProductAddComponent } from './component/product/product-add/product-add.component';
import { EntityAddComponent } from './component/entity/entity-add/entity-add.component';

const routes: Routes = [
  { path: 'updateaccount/:accountId', component: AccountHeadUpdateComponent, canActivate: [AuthGuard] },
  { path: 'account-list', component: AccountHeadListComponent, canActivate: [AuthGuard] },
  { path: 'account-add', component: AccountHeadAddComponent, canActivate: [AuthGuard] },
  { path: 'product-add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'entity-add', component: EntityAddComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create-token', component: CreateTokenComponent },
  { path: 'unauthorize', component: UnauthorizeComponent },
  { path: 'app', component: AppComponent },
  { path: '', component: CreateTokenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }