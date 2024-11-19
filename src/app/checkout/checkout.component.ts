import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: any;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    // Obtener los productos del carrito al inicializar el componente
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }
  calculateTotal() {
    this.total = this.cartItems.reduce((sum: any, item: { price: any; }) => {sum + item.price}, 0);
  }
}
