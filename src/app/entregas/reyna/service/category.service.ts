import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://fakestoreapi.com/products/categories';
  
  constructor(private oHttpClient: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.oHttpClient.get<string[]>(this.apiUrl);
  }
}
