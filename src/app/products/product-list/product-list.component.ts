import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { productsService } from '../products.service';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;  // Declare Bootstrap's modal (if needed)

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productValue!: number;
  foundProduct: Product | undefined;
  productsList: Product[] = [];
  addedProductName: string = '';  // To store the name of the added product

  constructor(private productService: productsService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productsList = data;
    })
  }

  //Agregar un producto al carrito
  addToCart(product: any) {
    console.log(product);
    this.cartService.addToCart(product);
    console.log("Producto agregado al carrito:" + product.title);

      // Update the product name for the modal
      this.addedProductName = product.title;

    // Mostrar alerta
    const modalElement = document.getElementById('productAddedModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();  // Show the modal when product is added
  }

  //resultado de la búsqueda
  searchProduct(){
    this.productService.searchProduct(this.productValue).subscribe(data => {
      this.foundProduct = data;
    });
  }
}