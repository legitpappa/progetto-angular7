import { Injectable } from '@angular/core';
import { IProduct } from '../models/iProduct';
import { IPRODUCTS } from '../products-list/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProducts(): IProduct[] {
    return IPRODUCTS;
  }

  getProductById(id: number): IProduct {
    const products = IPRODUCTS.filter((x: IProduct) =>
      x.id === id
    );
    return products && products.length > 0 ? products[0] : null;
  }
}
