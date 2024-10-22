import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

 

  constructor(private http: HttpClient) {}

  // Get list of products
  getProducts(){
    return this.http.get(`${API_URL}/products`);
  }

  // Add product to cart
  addToCart(productId: string, quantity: number){
    return this.http.post(`${API_URL}/cart/add`, { productId, quantity });
  }

  // Remove product from cart
  removeFromCart(productId: string){
    return this.http.delete(`${API_URL}/cart/remove/${productId}`);
  }

  // Update product quantity in cart
  updateQuantity(productId: string, quantity: number){
    return this.http.put(`${API_URL}/cart/update`, { productId, quantity });
  }

  // Get total cart price
  getCartTotal(){
    return this.http.get(`${API_URL}/cart/total`);
  }
}
