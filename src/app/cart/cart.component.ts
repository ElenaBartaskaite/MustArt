import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ImageService } from '../../services/image/image.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    CartService,ImageService
  ]
})
export class CartComponent implements OnInit {

  cartItems: any[];
  

  constructor(
    private imageService: ImageService
  ) {
  }

  ngOnInit() {
    this.cartItems = CartService.cartItems;
    console.log(this.cartItems);
  }

}
