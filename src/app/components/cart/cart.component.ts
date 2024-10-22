import { Component } from '@angular/core';
import { CartServiceService } from '../../../cart-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];
  sum: number = 0;

  constructor(private cartService: CartServiceService) {}

  ngOnInit(){
    this.loadCart();
  }

  loadCart(){
    this.cartService.getCartTotal().subscribe((data:any)=>{
      this.cartItems = data;
    });
  }

  removeFromCart(productId: string){
    this.cartService.removeFromCart(productId).subscribe(() => {
      this.loadCart();
    });
  }

  updateQuantity(productId: string, quantity: number){
    this.cartService.updateQuantity(productId, quantity).subscribe(() => {
      this.loadCart();
    });
  }
}
