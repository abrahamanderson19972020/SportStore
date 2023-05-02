import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ModelModule } from '../models/model/model.module';
import { CartSummaryComponent } from './cartinfo/cart-summary/cart-summary.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';

@NgModule({
  declarations: [
    ProductComponent,
    CartSummaryComponent,
    CardDetailComponent,
    CartCheckoutComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, ModelModule],
  exports: [ProductComponent, CardDetailComponent, CartCheckoutComponent],
})
export class StoreModule {}
