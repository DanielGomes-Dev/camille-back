import { Request, Response } from "express";
import ProductFoodPlusService from "../services/ProductFoodPlusService";
import ProductFoodService from "../services/ProductFoodService";
// import { apiErrorHandler } from "../handlers/errorHandler";

export default class ProductFoodConttroller {
  index(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async index_by_store_id(req: Request, res: Response): Promise<Response> {
    const storeId = Number(req.params.id);
    const productListByStore = await ProductFoodService.index(storeId);
    return res.json(productListByStore);
  }

  async index_by_token(req: Request, res: Response): Promise<Response> {
    try {
      const userId = Number(req.params.userLoggedId);
      const productListByStoreAndOwner =
        await ProductFoodService.index_by_token(userId);
      return res.status(200).json(productListByStoreAndOwner);
    } catch (e: any) {
      console.log(e.message);
      return res.status(401).json({ err: e.message });
    }
  }

  async index_complements_by_product_id(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const productId = Number(req.params.productId);
      const complementsProduct =
        await ProductFoodPlusService.index_by_product_id(productId);
      return res.status(200).json(complementsProduct);
    } catch (e: any) {
      console.log(e.message);
      return res.status(401).json({ err: e.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const product = await ProductFoodService.show(id);
    return res.json(product);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const img: any = req.file;
    const product = JSON.parse(req.body.product);
    const productPayload = {
      name: product.name,
      description: product.description,
      code: product.code,
      photo: img.url,
      price: product.price,
      active: true,
      saleOff: product.saleOff,
      categoryProductId: product.categoryProductId,
      storeId: 0,
    };
    const ownerId = Number(req.params.userLoggedId);
    console.log(productPayload);
    try {
      const newProduct = await ProductFoodService.create(
        productPayload,
        ownerId
      );

      for (const complemets of product.complements) {
        await ProductFoodPlusService.insert_plus_in_food({
          ...complemets,
          productId: newProduct.id,
          storeId: newProduct.storeId,
        });
      }
      return res.status(201).json(newProduct);
    } catch (err: any) {
      console.log(err);
      return res.status(401).json({ err: err.message });
    }
  }

  async createImg(req: any, res: Response) {
    try {
      const product = JSON.parse(req.body.product);
      return res.send(req.file);
    } catch (e) {
      console.log(e);
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    try {
      console.log(req.body);
      const productJson = JSON.parse(req.body.product);
      const img: any = req.file;
      const product: any = {
        id: productJson.id,
        name: productJson.name,
        description: productJson.description,
        code: productJson.code,
        photo: img?.url,
        price: productJson.price,
        active: productJson.active,
        saleOff: productJson.saleOff,
        categoryProductId: productJson.categoryProductId,
      };
      const ownerId = Number(req.params.userLoggedId);
      console.log(productJson);
      const productEdit = await ProductFoodService.edit(product, ownerId);

      for (const complemets of productJson.complements) {
        if (!complemets.id) {
          await ProductFoodPlusService.insert_plus_in_food({
            ...complemets,
            productId: productEdit.id,
            storeId: productEdit.storeId,
          });
        }
      }

      return res.status(200).json(productEdit);
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({ err: e.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const productId = Number(req.params.id);
      const ownerId = Number(req.params.userLoggedId);
      const productFood = await ProductFoodService.delete(productId, ownerId);
      return res.status(200).json(productFood);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }

  async delete_complement_by_id(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const productId = Number(req.params.id);
      const ownerId = Number(req.params.userLoggedId);
      const complement = await ProductFoodPlusService.delete_plus_in_food(
        productId,
        ownerId
      );
      return res.status(200).json(complement);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }
}
