import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../State/product.state";
import {Product} from "../../../models/products.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$?:Observable<AppDataState<Product[]>>
  @Output() productsEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  readonly DataStateEnum=DataStateEnum
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
this.productsEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
  }

  onDelete(p: any) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
  }

  onEdit(p: any) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
  }

  onActionEvent($event: ActionEvent) {
   this.productsEventEmitter.emit($event);
  }
}
