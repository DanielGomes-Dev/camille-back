import ContactInterface from "./ContactInterface";
import AddressInterface from "./AddressInterface";

interface userInterface {
  id?: number;
  email: string;
  password: string;
  cpf: string;
  name: string;
  typeUserId: string;
  contactId?: ContactInterface;
  addressId?: AddressInterface;
  statusId: number;
}

export default userInterface;
