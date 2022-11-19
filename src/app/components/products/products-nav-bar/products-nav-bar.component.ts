import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../State/product.state";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
@Output() productEventEmiter:EventEmitter<ActionEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnGetAllProducts() {
    this.productEventEmiter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  OnGetSelectedProducts() {
    this.productEventEmiter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  OnGetAvailableProducts() {
    this.productEventEmiter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    this.productEventEmiter.emit({type:ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    this.productEventEmiter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
  }
}
