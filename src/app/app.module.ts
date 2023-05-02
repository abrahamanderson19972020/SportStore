import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './store/product/product.component';
import { ModelModule } from './models/model/model.module';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { CardDetailComponent } from './store/card-detail/card-detail.component';
import { CartCheckoutComponent } from './store/cart-checkout/cart-checkout.component';
import { StoreGuard } from './guards/store.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: ProductComponent, canActivate: [StoreGuard] },
      {
        path: 'cart',
        component: CardDetailComponent,
      },
      {
        path: 'checkout',
        component: CartCheckoutComponent,
        canActivate: [StoreGuard],
      },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [StoreGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
