import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    static cartItems: [{
        id: string,
        quantity: number,
        product: string,
        details: string
    }] = [
        {
            id: "1",
            quantity: 1,
            product: "Mug",
            details: ""
        },
        {
            id: "2",
            quantity: 1,
            product: "Tshirt",
            details: "M"
        },
        {
            id: "2",
            quantity: 2,
            product: "Tshirt",
            details: "L"
        },
        {
            id: "2",
            quantity: 2,
            product: "Mug",
            details: ""
        },
        ];

    constructor() { }

    static getItems() {
        return this.cartItems;
    }

    static getItem(id: string, product: string, details: string) {
        return this.cartItems.find(value => {
            if (value.id == id && value.product == product && value.details == details) {
                return true;
            }
        })
    }

    static addItem(id: string, product: string, details: string) {
        let item = this.getItem(id, product, details);
        if (item) {
            this.increaseItem(id, product, details);
        }
        else {
            this.cartItems.push({
                id: id,
                quantity: 1,
                product: product,
                details: details
            })
        }
    }

    static removeItem(id: string, product: string, details: string): boolean {
        let item = this.getItem(id, product, details);
        if (item) {
            delete this.cartItems[this.cartItems.indexOf(item)];
            return true;
        }
        else {
            return false;
        }
    }

    static increaseItem(id: string, product: string, details: string): boolean {
        let item = this.getItem(id, product, details);
        if (item) {
            this.cartItems[this.cartItems.indexOf(item)].quantity++;
            return true;
        }
        else {
            return false;
        }
    }

    static decreaseItem(id: string, product: string, details: string): boolean {
        let item = this.getItem(id, product, details);
        if (item) {
            this.cartItems[this.cartItems.indexOf(item)].quantity--;
            if (this.cartItems[this.cartItems.indexOf(item)].quantity == 0) {
                this.removeItem(id, product, details);
            }
            return true;
        }
        else {
            return false;
        }
    }
}
