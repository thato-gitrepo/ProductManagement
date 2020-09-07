import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListComponent } from '../products/product-list.component';

@Component({
  selector: '[app-favourite-product]',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.css']
})
export class FavouriteProductComponent implements OnInit {

  productList: object;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<object>('../assets/products.json').subscribe(data => {
      this.productList = data;
    });
  }
}
