export type Voucher = {
  VoucherNo: number;
  Newvoucher: number;
};

export type Supplier = {
  id: number;
  accountname: string;
  address1: string;
  address2: string;
  emailid: string;
  gstno: string;
};

export type Product = {
  id: number;
  productname: string;
  productdesc: string;
  purchaserate: string;
  salesprice: string;
  pcategoryname: string;
};