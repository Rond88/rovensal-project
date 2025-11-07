import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { ProductCardUnroutedComponent } from '../product-card-unrouted/product-card-unrouted';
import { NavbarUnroutedComponent } from "../navbar-unrouted/navbar-unrouted";
import { HeaderUnrouted } from "../header-unrouted/header-unrouted";

@Component({
  selector: 'app-product-list-routed',
  imports: [ProductCardUnroutedComponent, HeaderUnrouted],
  templateUrl: './product-list-routed.html',
  styleUrl: './product-list-routed.css',
})
export class ProductListRoutedComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error al obtener productos', err),
    });
  }

}
