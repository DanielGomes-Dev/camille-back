import { Router } from "express";
import RequestController from "../controllers/RequestController";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class RequestRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private requestController: RequestController
  ) {
    this.router.get(
      "/requestStore",
      this.authVerify.getUserSellerByJwtToken,
      this.requestController.index
    );
    this.router.get(
      "/requestUser",
      this.authVerify.getUserBuyerByJwtToken,
      this.requestController.indexByUser
    );
    this.router.get(
      "/requestsReadyToDelivery",
      this.authVerify.getUserDeliverByJwtToken,
      this.requestController.showReadyToDeliver
    );
    this.router.get(
      "/myDeliverysInProgress",
      this.authVerify.getUserDeliverByJwtToken,
      this.requestController.myDeliverysInProgress
    );
    this.router.get(
      "/myDeliverysFinalized",
      this.authVerify.getUserDeliverByJwtToken,
      this.requestController.myDeliverysFinalized
    );
    this.router.get(
      "/request/:id",
      this.authVerify.getUserSellerByJwtToken ||
        this.authVerify.getUserBuyerByJwtToken,
      this.requestController.show
    );
    this.router.post(
      "/request",
      this.authVerify.getUserBuyerByJwtToken,
      this.requestController.create
    );
    this.router.put(
      "/requestAccept/:requestId",
      this.authVerify.getUserSellerByJwtToken,
      this.requestController.acceptNewRequest
    );
    this.router.put(
      "/requestSeparet/:requestId",
      this.authVerify.getUserSellerByJwtToken,
      this.requestController.requestSeparet
    );
    this.router.put(
      "/deliveringRequest/:requestId",
      this.authVerify.getUserDeliverByJwtToken,
      this.requestController.deliveringRequest
    );
    this.router.put(
      "/finalizeRequest/:requestId",
      this.authVerify.getUserDeliverByJwtToken,
      this.requestController.finalizeRequest
    );
    // this.router.put("/user/:id", this.userController.updateUser);
    // this.router.delete("/user/:id", this.userController.deleteUser);
  }
}
