export enum ProductActionsTypes{
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  SEARCH_PRODUCTS="[Product] Get Search products",
  NEW_PRODUCT="[Product] Get New product",
  SELECT_PRODUCT="[Product] Get Select product",
  EDIT_PRODUCT="[Product] Get Edit product",
  DELETE_PRODUCT="[Product] Get Delete product",
}
export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
 export interface AppDataState<T>{
   dataState?:DataStateEnum,
   data?:T,
   errorMessage?:string
 }
