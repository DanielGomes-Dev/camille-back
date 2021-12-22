import { AddressModel } from "../database/models/AdressModel";
import { ContactModel } from "../database/models/ContactModel";
import { StoreCategoryModel } from "../database/models/StoreCategoryModel";
import { StoreModel } from "../database/models/StoreModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class StoreService implements ServiceInterface {
  async index() {
    return await StoreModel.findAll({
      include: [
        {
          model: StoreCategoryModel,
          as: "category", // <---- HERE,
          attributes: ["id", "category"],
        },
      ],
    });
  }

  async show(id: number): Promise<any> {
    const store = await StoreModel.findByPk(id, {
      include: [
        {
          model: StoreCategoryModel,
          as: "category", // <---- HERE,
          attributes: ["id", "category"],
        },
      ],
    });

    return store;
  }

  async showInfo(ownerId: number) {
    const store = await StoreModel.findOne({
      where: { ownerId: ownerId },
      include: [
        {
          model: StoreCategoryModel,
          as: "category", // <---- HERE,
          attributes: ["id", "category"],
        },
        {
          model: AddressModel,
          as: "address", // <---- HERE,
        },
        {
          model: ContactModel,
          as: "contact", // <---- HERE,
        },
      ],
    });

    return store;
  }

  async create(store: any) {
    ///Implentar
    const newUser = await StoreModel.create(store);
    return newUser;
  }

  async edit(id: number, edited: any): Promise<any> {
    const store = await StoreModel.findOne({
      where: { ownerId: id },
    });
    if (!store) throw new Error("store not founf");
    const storeToEdit = await store.update(edited);

    return storeToEdit;
  }

  delete(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new StoreService();
