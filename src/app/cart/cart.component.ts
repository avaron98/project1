import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    // Obtener los productos del carrito al inicializar el componente
    this.cartItems = this.cartService.getCartItems();
  }

  deleteItem(item:any){
    this.cartService.deleteItem(item);
    this.cartItems=this.cartService.getCartItems(); // Actualiza la lista después de eliminar
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart(); // Actualiza la lista para reflejar el carrito vacío
  }
}
