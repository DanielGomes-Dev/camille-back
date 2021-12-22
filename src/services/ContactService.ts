import { AddressModel } from "../database/models/AdressModel";
import { ContactModel } from "../database/models/ContactModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class ContactService implements ServiceInterface {
  async index(id: number) {
    // return await AddressModel.findAll({
    //   where: { storeId: id },
    //   include: [
    //     {
    //       // model: StoreModel,
    //       as: "store", // <---- HERE,
    //     },
    //   ],
    // });
  }

  async show(id: number): Promise<any> {
    //Implentar;
    // return await AddressModel.findByPk(id, {
    //   include: [
    //     {
    //       // model: StoreModel,
    //       as: "store", // <---- HERE,
    //       attributes: ["id", "companyName", "fantasyName"],
    //     },
    //     {
    //       // model: ProductCategoryModel,
    //       as: "category",
    //       attributes: ["category"],
    //     },
    //   ],
    // });
  }

  async create(contact: any): Promise<any> {
    ///Implentar
    const newContact = await ContactModel.create(contact);
    return newContact;
  }

  async edit(id: number, edited: any): Promise<any> {
    const contact = await ContactModel.findOne({
      where: { id: id },
    });
    if (!contact) throw new Error("contact not founf");
    const contactToEdit = await contact.update(edited);

    return contactToEdit;
  }

  async delete(id: number): Promise<any> {
    ///Implentar
    return {};
  }
}

export default new ContactService();
