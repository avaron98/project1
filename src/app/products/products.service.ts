import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productsService {

  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  searchProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
}

//   //traer los productos
//   private productsList: Product[] = [
//     { id: 1, name: "producto1", description: "desk prod 1", price: 24 },
//     { id: 2, name: "producto2", description: "desk prod 2", price: 25 },
//     { id: 3, name: "producto3", description: "desk prod 3", price: 26 },
//   ];

//   //traer los productos
//   getProducts(): Product[] {
//     return this.productsList;
//   }

// //traer por id & //traer por name
// searchProduct (query: number|string):Product|undefined {
//   const queryNumber = Number(query);
//   console.log("query number: " + queryNumber)
// if(!isNaN(queryNumber)){
//   return this.productsList.find(result => result.id === queryNumber);
// }
// else {
//   return this.productsList.find(result => result.name.toLowerCase() === query);
// }
// }