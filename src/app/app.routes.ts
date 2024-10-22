import { Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { CartComponent } from './components/cart/cart.component';


// Define the routes
export const routes: Routes = [
  { path: 'products', component: ListProductComponent },  
  { path: 'cart', component:CartComponent},             

];
