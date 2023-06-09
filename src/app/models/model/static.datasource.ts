import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  categories: string[] = [];
  private products: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
    new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
    new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),
    new Product(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
    new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100),
    new Product(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
    new Product(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100),
    new Product(9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100),
    new Product(10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100),
    new Product(11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 100),
    new Product(12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 100),
    new Product(13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 100),
    new Product(14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 100),
    new Product(15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 100),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
  getProductByCategory(categoryName: string): Product[] {
    return this.products.filter((p) => p.category === categoryName);
  }
  getAllCategories(): string[] {
    this.products.forEach((p) => {
      var result = this.categories.find((c) => c === p.category);
      if (!result) {
        this.categories.push(p.category!);
      }
    });
    return this.categories;
  }
}
