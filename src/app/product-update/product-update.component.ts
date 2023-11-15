import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CategoriesService } from '../categories.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = new Product;
  category: Category = new Category;
  

  categories: any = [];

  constructor(private router: Router, private productsService: ProductsService, private categoriesService: CategoriesService, private route: ActivatedRoute, private datePipe: DatePipe) { }


  ngOnInit() {
    this.loadCategories();
    this.loadProduct();
    
   

  }

  loadCategories(){
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  loadProduct(){
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.product = data;

      // aqui verificamos la categoria para dp cargarla en el form
      if (this.product.category && this.categories.find(c => c.id === this.product.category.id)) {
        
        this.product.category = this.categories.find(c => c.id === this.product.category.id);
      }

      if (this.product.date_added){
        this.product.date_addedFormated = this.formatDate(this.product.date_added);
        
      }
    });
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }


  
  

  updateProduct(){
    if (this.product.date_addedFormated){
      this.product.date_added = new Date(this.product.date_addedFormated);
    }
    this.productsService.updateProduct(this.product);
    this.navigateDetail();
  }

  cancelUpdate(){
    this.navigateDetail();
  }
  navigateDetail(){
    this.router.navigate(['/product', this.route.snapshot.params['id']]);
  }

}
