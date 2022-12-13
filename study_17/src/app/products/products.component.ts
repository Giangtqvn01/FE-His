import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private http: HttpService) {}
  _getProducts(): void {
    this.products= [
      { _id: '1', price: 12, image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', name: 'Sp 1' },
      { _id: '2', price: 112, image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', name: 'Sp 2' },
      { _id: '3', price: 122, image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', name: 'Sp 3' },
      { _id: '4', price: 123, image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', name: 'Sp 4' },
      { _id: '5', price: 124, image: 'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg', name: 'Sp 5' },
    ]
  }
  _addItemToCart( id: any, quantity : any): void {
    let payload = {
      productId: id,
      quantity,
    };
  }
  ngOnInit(): void {
    this._getProducts();
  }
  goToDetail(id:any){
    
  }
}
