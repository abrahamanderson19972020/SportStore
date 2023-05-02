import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent {
  constructor(public cart: Cart, private router: Router) {}
  goToCartDetailPage() {
    this.router.navigateByUrl('/cart');
  }
}
