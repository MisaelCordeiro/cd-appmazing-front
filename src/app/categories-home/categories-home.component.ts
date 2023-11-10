import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.css']
})
export class CategoriesHomeComponent implements OnInit {
  categories: any = [];
  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data =>{
      this.categories = data
    })
  }

  displayedColumns: string[] = ['id','name'];

}
