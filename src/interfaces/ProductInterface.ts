interface ProductInterface {
  id?: number;
  description: string;
  name: string;
  code: string;
  photo: string;
  weight: string;
  stock: number;
  price: number;
  active: boolean;
  saleOff: boolean;
  storeId?: number;
  colors: any[];
  sizes: any[];
  categorys: any[];
}

export default ProductInterface;
