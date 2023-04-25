import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ModelModule } from '../models/model/model.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, BrowserModule, FormsModule, ModelModule],
  exports: [ProductComponent],
})
export class StoreModule {}
