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
    const index = this.cartItems.indexOf(item); // Find the index of the item
    if (index > -1) { // Ensure the item exists in the array
      this.cartItems.splice(index, 1); // Remove the specific item
  }}

  clearCart() {
    this.cartItems = []; // Vacía el carrito
    return this.cartItems;
  }
}
