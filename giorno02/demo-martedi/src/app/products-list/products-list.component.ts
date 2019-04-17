import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { IProduct } from '../models/iProduct';
import { ContextService } from '../services/context.service';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {


  title: string;
  subtitle: string;
  productNumber: number;
  products: IProduct[] = [];
  dataOdierna = new Date();
  selectedProduct: IProduct;
  showTable = true;

  constructor(private contextService: ContextService,
    private productsService: ProductsService, private router: Router) {
    this.title = this.contextService.getTitleProductsListComponent();
    this.subtitle = 'catalogo';
    this.products = this.productsService.getAllProducts();
    this.productNumber = this.products.length;


  }
  esempioDiClick() {
    this.products = [];
  }
  aggiungiProdotto() {
    this.products.push({
      id: this.products.length + 1, name: 'La Bibbia', category: 'libro', price: 15, description: 'fantasy',
      releaseDate: 'March 19, 2016',
      image: 'https://img.libreriadelsanto.it/books/s/s0OScTMBgYWl_s4', starRating: 4
    });
  }

  choosenProduct(selectedProduct: IProduct) {
    // this.selectedProduct = selectedProduct;
    // this.showTable = false;
    this.router.navigate(['/products/', selectedProduct.id]);
  }
  notificaDaFiglio(messaggio: IProduct) {
    this.showTable = true;
  }
}
