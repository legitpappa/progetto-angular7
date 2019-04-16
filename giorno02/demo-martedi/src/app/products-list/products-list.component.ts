import { Component, OnInit } from '@angular/core';
import { IPRODUCTS } from './data';
import { IProduct } from '../models/iProduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  title: string;
  subtitle: string;
  productNumber: number;
  products: IProduct[] = [];
  example = 'ciao';
  dataOdierna = new Date();

  constructor() {
    this.title = 'lista prodotti';
    this.subtitle = 'catalogo';
    this.products = IPRODUCTS;
    this.productNumber = this.products.length;
  }
  esempioDiClick() {
    this.products = [];
  }
  aggiungiProdotto() {
    this.products.push({
      id: this.products.length + 1, name: 'La Bibbia', category: 'libro', price: 15, description: 'fantasy',
      image: 'https://img.libreriadelsanto.it/books/s/s0OScTMBgYWl_s4'
    });
  }

  ngOnInit() {
  }

}
