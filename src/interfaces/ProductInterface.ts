interface ProductInterface {
  id?: number;
  description: string;
  name: string;
  code: string;
  photo: string;
  size: string;
  weight: string;
  stock: number;
  price: number;
  active: boolean;
  saleOff: boolean;
  storeId?: number;
  colors: any[];
  categorys: any[];
}

export default ProductInterface;
