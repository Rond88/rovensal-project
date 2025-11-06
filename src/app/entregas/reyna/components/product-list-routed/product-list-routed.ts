import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { ProductCardUnroutedComponent } from '../product-card-unrouted/product-card-unrouted';

@Component({
  selector: 'app-product-list-routed',
  imports: [ProductCardUnroutedComponent],
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
