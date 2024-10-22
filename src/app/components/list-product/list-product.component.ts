import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../../../cart-service.service';
import { Product } from '../../module/product';


@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']  
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];


  constructor(private cartService: CartServiceService) {}

  // Lifecycle hook to fetch products on component initialization
  ngOnInit() {
    this.cartService.getProducts().subscribe((data:any)=>{
      this.products = data;
    });
  }

  // Method to add a product to the cart
  addToCart(productId: string) {
    this.cartService.addToCart(productId, 1).subscribe(() => {
      alert('Product added to cart');
    });
  }
}
