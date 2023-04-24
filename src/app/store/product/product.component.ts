import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model/product.model';
import { StaticDataSource } from 'src/app/models/model/static.datasource';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private dataService: StaticDataSource) {}
  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
