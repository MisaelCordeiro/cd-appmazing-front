import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../model/Category';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  name: string;

  constructor(private router: Router, private categoryService: CategoriesService) { }
  

  ngOnInit() {
  }
  newCategory(){
    const category = {
      name: this.name
    }
    this.categoryService.newCategory(category);
    this.navigateToHome();
  }
  cancelInsert(){
    this.navigateToHome();
  }
  navigateToHome(){
    this.router.navigate(['/categories']);
  }

 

}
