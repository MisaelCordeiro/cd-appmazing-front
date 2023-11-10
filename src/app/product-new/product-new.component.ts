import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product();
  category: Category = new Category();

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
  }

  newProduct(){
    const product = {
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      active: this.product.active,
      date_added: this.product.date_added,
      category: this.category
    }
    this.productsService.newProduct(product);
    this.navigateToHome();

  }
  cancelInsert(){
    this.navigateToHome();
  }
  
  navigateToHome(){
    this.router.navigate(['/products']);
  }



}
