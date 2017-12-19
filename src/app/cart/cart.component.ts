import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    CartService
  ]
})
export class CartComponent implements OnInit {

  cartItems: any[];

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.cartItems = CartService.cartItems;
    console.log(this.cartItems);
  }

}
