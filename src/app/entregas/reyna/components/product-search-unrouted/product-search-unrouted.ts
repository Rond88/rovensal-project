import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductCardUnroutedComponent } from '../product-card-unrouted/product-card-unrouted';

@Component({
  selector: 'app-product-search-unrouted',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductCardUnroutedComponent],
  templateUrl: './product-search-unrouted.html',
  styleUrls: ['./product-search-unrouted.css'],
})
export class ProductSearchUnroutedComponent {
  private _allProducts: Product[] = [];

  @Input() 
  set allProducts(products: Product[]) {
    this._allProducts = products;
    this.filteredProducts = [...this._allProducts];
  }

  @Input() categoryFilter: string | null = null;

  filteredProducts: Product[] = [];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: ['', [Validators.pattern('[a-zA-Z ]*')]],
      minPrice: ['', [Validators.pattern('^[0-9]*$')]],
      maxPrice: ['', [Validators.pattern('^[0-9]*$')]],
    });
  }

  ngOnChanges(): void {
    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    const { name, minPrice, maxPrice } = this.searchForm.value;

    this.filteredProducts = this._allProducts.filter(p => {
      return (!name || p.title.toLowerCase().includes(name.toLowerCase()))
        && (!minPrice || p.price >= +minPrice)
        && (!maxPrice || p.price <= +maxPrice)
        && (!this.categoryFilter || p.category === this.categoryFilter);
    });
  }
}
