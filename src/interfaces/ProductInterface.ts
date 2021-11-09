interface ProductInterface {
  name: string;
  code: string;
  photo: string;
  stock: number;
  price: number;
  active: boolean;
  saleOff: boolean;
  categoryProductId: number;
  storeId: number;
}

export default ProductInterface;
