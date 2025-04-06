import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true, // ✅ If you're using standalone components
  imports: [CommonModule], // ✅ Include CommonModule for *ngFor, *ngIf, etc.
  template: `
    <h2>Products</h2>
    <ul>
      <li *ngFor="let p of products">{{ p.name }}</li>
    </ul>
  `,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }
}
