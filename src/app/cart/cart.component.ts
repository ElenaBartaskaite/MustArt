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
  Remove(item){
    CartService.removeItem(item.id, item.product, item.details)
  }
  GetTotal():number{
    var total:number=0;
    for (let item of this.cartItems) {
      total=total+ this.getPrice(item);
    }
    return total;
  }
  getPrice(item):number{
    if (item.product=="Mug")return this.imageService.getImageById(item.id).prices.mug;
    else if (item.product=="Print")return this.imageService.getImageById(item.id).prices.print;
    else if (item.product=="Tshirt")return this.imageService.getImageById(item.id).prices.shirt;
  }
}
