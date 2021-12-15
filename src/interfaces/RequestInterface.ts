import AddressInterface from "./AddressInterface";
import ContactInterface from "./ContactInterface";
import ProductInterface from "./ProductInterface";
import userInterface from "./UserInterface";
import StoreController from "../controllers/StoreController";

interface RequestInterface {
  client: userInterface;
  store: StoreController;
  product: ProductInterface;
  status: string;
  lastStatusUpdate: string;
  contact: ContactInterface;
  address: AddressInterface;
}

export default RequestInterface;
