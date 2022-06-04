import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountListComponent } from './component/account-list/account-list.component';
import { AccountUpdateComponent } from './component/account-update/account-update.component';
import { AccountComponent } from './component/account/account.component';
import { AddAccountComponent } from './component/add-account/add-account.component';
import { CreateTokenComponent } from './component/create-token/create-token.component';
import { HomeComponent } from './component/home/home.component';
import { UnauthorizeComponent } from './component/unauthorize/unauthorize.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'updateaccount/:accountId', component: AccountUpdateComponent, canActivate: [AuthGuard] },
  { path: 'account-list', component: AccountListComponent, canActivate: [AuthGuard] },
  { path: 'add-account', component: AddAccountComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
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