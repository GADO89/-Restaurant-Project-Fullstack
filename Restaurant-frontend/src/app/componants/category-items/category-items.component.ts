import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/Category";
import {CategoryServiceService} from "../../service/category-service.service";

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.css'
})
export class CategoryItemsComponent implements OnInit{
categories: Category[]=[];
constructor(private categoryService: CategoryServiceService) {
}
  ngOnInit(): void {
  this.getAllCategories();
  }
getAllCategories(){
  this.categoryService.getCategories().subscribe(
    data => {
      this.categories = data
    }
  )
}

}
