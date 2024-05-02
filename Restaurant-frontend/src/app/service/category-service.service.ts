import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Order} from "../model/Order";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {


  private baseUrl= "http://localhost:8080/api/allCategories";
  constructor(private http:HttpClient) { }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map(
        response => response
      )
    );
  }
}
