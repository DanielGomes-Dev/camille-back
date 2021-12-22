import { AddressModel } from "../database/models/AdressModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class AddressService implements ServiceInterface {
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

  async create(address: any): Promise<any> {
    ///Implentar
    const newAddress = await AddressModel.create(address);
    return newAddress;
  }

  async edit(id: number, edited: any): Promise<any> {
    const address = await AddressModel.findOne({
      where: { id: id },
    });
    if (!address) throw new Error("address not founf");
    const addressToEdit = await address.update(edited);

    return addressToEdit;
  }
  async delete(id: number): Promise<any> {
    ///Implentar
    return {};
  }
}

export default new AddressService();
