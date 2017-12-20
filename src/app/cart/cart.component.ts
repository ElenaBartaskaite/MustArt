import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ImageService } from '../../services/image/image.service';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    CartService,ImageService,NotificationService
  ]
})
export class CartComponent implements OnInit {

  get cartItems() {return CartService.getItems};

  constructor(
    private imageService: ImageService,
    private notifications: NotificationService
  ) {
  }

  ngOnInit() {
    //this.cartItems = CartService.getItems;
    console.log(this.cartItems);
  }
  Remove(item){
    console.log(item);
    CartService.removeItem(item.id, item.product, item.details);
  }
  GetTotal():number{
    var total:number=0;
    for (let item of this.cartItems) {
      total=total+ this.getPrice(item) * item.quantity;
    }
    return total;
  }
  getPrice(item):number{
    if (item.product=="Mug")return this.imageService.getImageById(item.id).prices.mug;
    else if (item.product=="Print")return this.imageService.getImageById(item.id).prices.print;
    else if (item.product=="Tshirt")return this.imageService.getImageById(item.id).prices.shirt;
  }

  getItem(item) {
    return CartService.getItem(item.id, item.product, item.details);
  }

  purchase() {
    this.notifications.showError("Error", "Couldn't connect to purchase server. Please try again later.")
    console.log(this.cartItems);
  }
}
