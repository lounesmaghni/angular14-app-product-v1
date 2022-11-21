import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/products.model";
import {ActionEvent, ProductActionsTypes} from "../../../../State/product.state";
import {EventDriverService} from "../../../../services/event.driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input()product?:Product;
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:product});
  }

  onDelete(product: Product) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:product});
  }

  onEdit(product: Product) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:product});
  }
}
