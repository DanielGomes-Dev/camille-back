import { Request, Response } from "express";
import { VehiclesModel } from "../database/models/VehiclesModel";
import VehicleService from "../services/VehicleService";

// import { apiErrorHandler } from "../handlers/errorHandler";
export default class VehicleController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const img: any = req.files;
      const vehicleBody = JSON.parse(req.body.store);
      const owner = Number(req.params.userLoggedId);
      const newVehicle = {
        photo: img["photo"] ? img["photo"][0].url.split("?")[0] : undefined,
        placa: vehicleBody.placa,
        chassi: vehicleBody.chassi,
        vehicleTypeId: vehicleBody.vehicleTypeId,
        ownerVehicleId: owner,
        dealership: vehicleBody.dealership,
        modelCar: vehicleBody.modelCar,
      };

      const vehicle: VehiclesModel = await VehicleService.create(newVehicle);
      return res.status(201).json(vehicle);
    } catch (e: any) {
      return res.status(400).json({ err: e.message });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    try {
      console.log("ok");
      const img: any = req.files;
      const vehicleBody = JSON.parse(req.body.store);
      const owner = Number(req.params.userLoggedId);
      const editVehicle = {
        photo: img["photo"] ? img["photo"][0].url.split("?")[0] : undefined,
        placa: vehicleBody.placa,
        chassi: vehicleBody.chassi,
        vehicleTypeId: vehicleBody.vehicleTypeId,
        ownerVehicleId: owner,
        dealership: vehicleBody.dealership,
        modelCar: vehicleBody.modelCar,
      };

      const vehicle: VehiclesModel = await VehicleService.edit(editVehicle);
      return res.status(201).json(vehicle);
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({ err: e.message || e });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const owner = Number(req.params.userLoggedId);
      await VehicleService.delete(owner);
      return res.status(200).json({});
    } catch (e: any) {
      return res.status(400).json({ err: e.message || e });
    }
  }
}
