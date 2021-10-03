import OpeningHoursInterface from "./OpeningHoursInterface";
import AddressInterface from "./AddressInterface";
import ContactInterface from "./ContactInterface";

interface StoreInterface {
  // requests: string;
  sales_man: string;
  // sales_number: number;
  // on_sale: boolean;
  // products: produtoInterface;
  corporate_name: string;
  brand_name: string;
  cnpj: string;
  ie: string;
  banner: string;
  // balance: number;
  additional_information: string;
  category: string;
  contact: ContactInterface;
  opening_hours: OpeningHoursInterface;
  address: AddressInterface;
}

export default StoreInterface;
