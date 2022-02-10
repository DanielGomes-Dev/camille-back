interface ProductInterface {
  id?: number;
  description: string;
  name: string;
  code: string;
  photo: string;
  stock: number;
  price: number;
  active: boolean;
  saleOff: boolean;
  categoryProductId: number;
  storeId?: number;
  colors: any[];
}

export default ProductInterface;
