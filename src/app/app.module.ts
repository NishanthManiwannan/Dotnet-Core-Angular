import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemsComponent } from './items/items.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { PurchasedDetailsComponent } from './purchased-details/purchased-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemsComponent,
    PurchaseItemComponent,
    PurchasedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
