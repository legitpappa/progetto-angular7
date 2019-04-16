import { Component, OnInit } from '@angular/core';
import { provideRouterInitializer } from '@angular/router/src/router_module';
import { Product } from '../models/product';
import { PRODUCTS } from './data';

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
  example = 'ciao';

  constructor() {
    this.title = 'lista prodotti';
    this.subtitle = 'catalogo';
    this.products = PRODUCTS;
    this.productNumber = this.products.length;
  }

  esempioDiClick() {
    this.products = [];
  }
  aggiungiProdotto() {
    this.products.push(new Product(this.products.length + 1, 'La Bibbia', 'libro', 15, 'fantasy',
      'https://img.libreriadelsanto.it/books/s/s0OScTMBgYWl_s4'));
  }

  ngOnInit() {
  }

}
