import { Component, OnInit } from '@angular/core';
import { provideRouterInitializer } from '@angular/router/src/router_module';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  title: string;
  subtitle: string;
  productNumber: number;
  products: Product[] = [];

  constructor() {
    this.title = 'lista prodotti';
    this.subtitle = 'catalogo';
    this.creaListaProdotti();
    this.productNumber = this.products.length;
  }
  private creaListaProdotti(): void {
this.products.push(new Product(1, 'Harry Potter e la pietra filosofale', 'libro', 12, 'fantasy'));
this.products.push(new Product(2, 'Il silenzio degli innocenti', 'libro', 13, 'romanzo'));
this.products.push(new Product(3, 'Il rifugio', 'libro', 14, 'romanzo'));
  }
  ngOnInit() {
  }

}
