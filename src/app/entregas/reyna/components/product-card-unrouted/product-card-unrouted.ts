import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-product-card-unrouted',
  standalone: true,
  imports: [ CurrencyPipe, TitleCasePipe ],
  templateUrl: './product-card-unrouted.html',
  styleUrls: ['./product-card-unrouted.css'],
})
export class ProductCardUnroutedComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  irAProductDetail() {
    this.router.navigate(['/reyna/product', this.product.id]);
  }
}
