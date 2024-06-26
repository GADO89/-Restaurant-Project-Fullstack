
// @ts-nocheck
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../model/Category";
import {Country} from "../model/country";
import {State} from "../model/state";

@Injectable({
  providedIn: 'root'
})
export class StateCountryServiceService {

  private baseUrl= "http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  getAllCountry():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.baseUrl}countries`).pipe(
      map(
        response => response
      )
    )
  }
  getAllStates():Observable<State[]>{
    return this.http.get<State[]>(`${this.baseUrl}states`).pipe(
      map(
        response => response
      )
    );
  }


  getStatesByCode(code): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}statescode?code=${code}`).pipe(
      map(
        response => response
      )
    )
  }
}
