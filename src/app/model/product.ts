export type Product = {
  // id: number;
  productname: string;
  productdesc: string;
  openingstockqty: number;
  openingstockboxqty: number;
  openingstockvalue: number;
  productcategory:number;  
  purchaserate: number;
  prlesspercentage: number;
  mrp: number;
  mrpless:number
  salesprice: number;
  totalgst: number;
  cgst:number;  
  cgstcess: number;
  sgst: number;
  entity: number;
  sgstcess:number;
  
};

export type ProductModel = {
  entity: number;
  productname: string;
  openingstockqty: number;
  purchaserate: number;
  mrp: number;
  salesprice: number;
  cgst:number;
  sgst: number;
  openingstockboxqty: number;
};

// export type AccountHeadDropDownModel = {
//   accountHeadId: number;
//   accountHeadName: string;
// };