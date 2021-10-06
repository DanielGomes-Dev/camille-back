import ContactInterface from "./ContactInterface";
import AddressInterface from "./AddressInterface";

interface userInterface {
  email: string;
  password: string;
  cpf: string;
  name: string;
  typeUserId: string;
  contactId?: ContactInterface;
  addressId?: AddressInterface;
  status: string;
}

export default userInterface;
