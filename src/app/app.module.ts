import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './store/product/product.component';
import { ModelModule } from './models/model/model.module';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
