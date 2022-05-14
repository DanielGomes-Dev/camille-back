import { Router } from "express";
import VehicleController from "../controllers/VehicleController";
import authVerify from "../middleware/authVerify";
import uploadAzure from "../uploadAzure";

// import User from "../models/User";

export default class VehicleRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private vehicleController: VehicleController
  ) {
    this.router.post(
      "/vehicle",
      this.authVerify.getUserDeliverByJwtToken,
      uploadAzure.fields([{ name: "photo" }]),
      this.vehicleController.create
    );
    this.router.put(
      "/vehicle",
      this.authVerify.getUserDeliverByJwtToken,
      uploadAzure.fields([{ name: "photo" }, { name: "banner" }]),
      this.vehicleController.edit
    );
    this.router.delete(
      "/vehicle",
      this.authVerify.getUserDeliverByJwtToken,
      this.vehicleController.delete
    );
  }
}
