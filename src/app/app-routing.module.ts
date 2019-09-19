import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ItemsComponent } from './items/items.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { PurchasedDetailsComponent } from './purchased-details/purchased-details.component';

const routes: Routes = [
  {path : 'Customer', component : CustomerComponent},
  {path : 'Items', component : ItemsComponent},
  {path : 'Purchase', component : PurchaseItemComponent},
  {path : 'PurchDetails', component : PurchasedDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
