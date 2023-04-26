import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model/product.model';
import { StaticDataSource } from 'src/app/models/model/static.datasource';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  selectedCategory: string | undefined;
  productsPerPage: number = 4;
  selectedPage: number = 1;
  products: Product[] = [];
  allProducts: Product[] = [];
  categories: string[] = [];
  constructor(private dataService: StaticDataSource) {}
  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res) => {
      this.allProducts = res;
      let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
      res.slice(pageIndex, pageIndex + this.productsPerPage);
      this.products = res;
    });
    this.categories = this.dataService.getAllCategories();
    console.log(this.categories);
  }

  changeCategory(category?: string) {
    this.selectedCategory = category;
    this.products = this.dataService.getProductByCategory(category!);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.products?.length / this.productsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }
}
