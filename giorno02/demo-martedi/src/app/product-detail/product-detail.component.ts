import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../models/iProduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input() title: string;
@Input() selectedProduct: IProduct;
@Output() notifica: EventEmitter<IProduct>;
  constructor() {
    this.notifica = new EventEmitter<IProduct>();
   }

  ngOnInit() {
  }
updateProduct() {
  this.notifica.emit(this.selectedProduct);
}
}
