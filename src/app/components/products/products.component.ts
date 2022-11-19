import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/products.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../State/product.state";
import {Router} from "@angular/router";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//products?:Product[];
  //Object observable finish with $
  products$?:Observable<AppDataState<Product[]>>
  readonly DataStateEnum=DataStateEnum

  constructor(private productsService:ProductsService ,private router:Router) {

  }

  ngOnInit(): void {
  }

  OnGetAllProducts() {
    //Sollution1 simple
    /*this.productsService.getAllProducts().subscribe(data=>{
      this.products=data;
    },err=>{
      console.log(err);
    })*/

    //Sollution2 with observable
    this.products$= this.productsService.getAllProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED ,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  OnGetSelectedProducts() {
    this.products$= this.productsService.getSelectedProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED ,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  OnGetAvailableProducts() {
    this.products$= this.productsService.getAvailableProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED ,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onSearch(value: any) {
    this.products$= this.productsService.searchProducts(value.keyword).pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED ,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }


  onSelect(p: any) {
    this.productsService.selectProduct(p).subscribe(data=>{
      p.selected=data.selected;
    })
  }

  onDelete(p: any) {
    let v=confirm("Etes vous sure de vouloir supprimer l element");
    if(v==true)
    this.productsService.deleteProduct(p).subscribe((data=>{
      this.OnGetAllProducts();
    }))

  }


  onNewProduct() {
this.router.navigateByUrl("/newProduct");
  }

  onEdit(p: any) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }

  onActionEvent($event: ActionEvent) {
switch($event.type){
      case ProductActionsTypes.GET_ALL_PRODUCTS:this.OnGetAllProducts();break
      case ProductActionsTypes.GET_SELECTED_PRODUCTS:this.OnGetSelectedProducts();break
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:this.OnGetAvailableProducts();break
      case ProductActionsTypes.NEW_PRODUCT:this.onNewProduct();break
      case ProductActionsTypes.SEARCH_PRODUCTS:this.onSearch($event.payload);break
      case ProductActionsTypes.SELECT_PRODUCT:this.onSelect($event.payload);break
      case ProductActionsTypes.DELETE_PRODUCT:this.onDelete($event.payload);break
      case ProductActionsTypes.EDIT_PRODUCT:this.onEdit($event.payload);break
    }
  }
}
