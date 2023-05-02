import { Component } from '@angular/core';
import { Cart } from 'src/app/models/model/cart.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  constructor(public cart: Cart) {}
}
