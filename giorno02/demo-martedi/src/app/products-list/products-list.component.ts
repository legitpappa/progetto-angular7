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
this.products.push(new Product(1, 'Harry Potter e la pietra filosofale', 'libro', 12, 'fantasy',
 'https://images.pottermore.com/bxd3o8b291gf'
 + '/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'));
this.products.push(new Product(2, 'Il silenzio degli innocenti', 'libro', 13, 'romanzo',
 'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY'
+ '/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'));
this.products.push(new Product(3, 'Il rifugio', 'libro', 14, 'romanzo', 'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/'
+ '25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg '));
  }
  ngOnInit() {
  }

}
