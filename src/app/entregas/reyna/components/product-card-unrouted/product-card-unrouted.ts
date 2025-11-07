import { Component, inject, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailModalUnrouted } from '../product-detail-modal-unrouted/product-detail-modal-unrouted';
@Component({
  selector: 'app-product-card-unrouted',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './product-card-unrouted.html',
  styleUrls: ['./product-card-unrouted.css'],
})
export class ProductCardUnroutedComponent {
  @Input() product!: Product;
  readonly dialog = inject(MatDialog);

  constructor(private router: Router) {}

   abrirDetalle(): void {
    this.dialog.open(ProductDetailModalUnrouted, {
      width: '1200px',
      height: '600px',
      data: this.product.id, // ahora paso a pedir solo el ID en vez del objeto completo
    });
  }
}
