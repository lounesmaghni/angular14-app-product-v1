import {Component,Input, OnInit} from '@angular/core';
import { AppDataState, DataStateEnum} from "../../../State/product.state";
import {Product} from "../../../models/products.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$?:Observable<AppDataState<Product[]>>
  readonly DataStateEnum=DataStateEnum
  constructor() { }

  ngOnInit(): void {
  }

}
