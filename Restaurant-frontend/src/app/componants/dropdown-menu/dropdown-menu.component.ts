import { Component } from '@angular/core';
import {Category} from "../../model/Category";
import {CategoryServiceService} from "../../service/category-service.service";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {

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
