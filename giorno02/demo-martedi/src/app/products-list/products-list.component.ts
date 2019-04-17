import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { IPRODUCTS } from './data';
import { IProduct } from '../models/iProduct';
import { Alert } from 'selenium-webdriver';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy, OnChanges {


  title: string;
  subtitle: string;
  productNumber: number;
  products: IProduct[] = [];
  dataOdierna = new Date();
  selectedProduct: IProduct;
  showTable = true;

  constructor(private contextService: ContextService) {
    this.title = this.contextService.getTitleProductsListComponent();
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
    console.log('siamo in ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('siamo in destroy');
    alert('destroy work');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  choosenProduct(selectedProduct: IProduct) {
    this.selectedProduct = selectedProduct;
    this.showTable = false;
  }
  notificaDaFiglio(messaggio: IProduct) {
    this.showTable = true;
  }
}
