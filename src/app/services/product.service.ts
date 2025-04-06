import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';



export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl; // Use API URL from environment

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    console.log("Getting products...");
    return this.http.get(`${this.apiUrl}/Products`).pipe(
      catchError(error => {
        console.error("Error occurred:", error);
        return throwError(error);  // Re-throw the error so it can be handled by the component
      })
    );
  }
  
}
