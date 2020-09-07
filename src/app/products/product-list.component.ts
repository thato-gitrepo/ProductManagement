import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector:'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit
{  
  pageTitle:string = 'Product List';
  showImage: boolean = false;

  products: object;

  searchProduct: string;

 constructor(private http: HttpClient){

 }
  
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  Search() {
    if (this.searchProduct !== '') {
      //@ts-ignore
      this.products = this.products.filter(results => {
        return results.productName.toLowerCase().includes(this.searchProduct);
      });
    }
    else if (!this.searchProduct) {
      this.ngOnInit();
    }
  }

  ngOnInit(): void {
    this.http.get<object>('../assets/products.json').subscribe(data => {
      this.products = data;
    });
  }
}
