import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.css']
})
export class CategoriesHomeComponent implements OnInit {
  categories: any = [];
  constructor(private categoriesService: CategoriesService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data =>{
      this.categories = data
    })
  }

  displayedColumns: string[] = ['id','name'];

}
