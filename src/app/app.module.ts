import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './store/product/product.component';
import { ModelModule } from './models/model/model.module';

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [BrowserModule],
  providers: [ModelModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
