import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../State/product.state";
import {EventDriverService} from "../../../services/event.driver.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  OnGetAllProducts() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  OnGetSelectedProducts() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  OnGetAvailableProducts() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
  }
}
