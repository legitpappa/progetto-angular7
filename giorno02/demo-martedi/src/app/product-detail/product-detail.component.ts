import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../models/iProduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input() title: string;
@Input() selectedProduct: IProduct;

  constructor() { }

  ngOnInit() {
  }
updateProduct() {
  alert(this.selectedProduct.price);
}
}
