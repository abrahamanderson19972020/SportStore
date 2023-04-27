import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [StaticDataSource, Cart],
})
export class ModelModule {}
