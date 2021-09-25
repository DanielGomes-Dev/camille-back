import ContactInterface from "./ContactInterface";
import AddressInterface from "./OpeningHoursInterface";

interface userInterface {
  login: string;
  password: string;
  cpf: string;
  nome: string;
  type: string;
  contact: ContactInterface;
  address: AddressInterface;
  status: string;
}

export default userInterface;
