import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../models/iProduct';

@Component({
  selector: 'app-product-detail-by-navigation',
  templateUrl: './product-detail-by-navigation.component.html',
  styleUrls: ['./product-detail-by-navigation.component.css']
})
export class ProductDetailByNavigationComponent {
  product: IProduct;
  constructor(private router: Router,
              private route: ActivatedRoute, private productsService: ProductsService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productsService.getProductById(parseInt(id, 10));
  }

  goBack() {
    this.router.navigateByUrl('/products');
  }

}
