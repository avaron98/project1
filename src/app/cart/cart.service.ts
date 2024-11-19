import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //Crear mi arreglo para guardar los productos
  private cartItems: any[] = [];

  //crear metodo
  addToCart(product: any) {
    console.log(product);
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  deleteItem(item: any) {
    this.cartItems.splice(0, 1);
  }

  clearCart() {
    this.cartItems = []; // Vacía el carrito
    return this.cartItems;
  }
}
