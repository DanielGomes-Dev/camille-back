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
      this.authVerify.getUserByJwtToken,
      this.requestController.index
    );
    this.router.get(
      "/requestUser",
      this.authVerify.getUserByJwtToken,
      this.requestController.indexByUser
    );
    this.router.get(
      "/request/:id",
      this.authVerify.getUserByJwtToken,
      this.requestController.show
    );
    this.router.post(
      "/request",
      this.authVerify.getUserByJwtToken,
      this.requestController.create
    );
    this.router.put(
      "/requestAccept/:requestId",
      this.authVerify.getUserByJwtToken,
      this.requestController.acceptNewRequest
    );
    this.router.put(
      "/requestSeparet/:requestId",
      this.authVerify.getUserByJwtToken,
      this.requestController.requestSeparet
    );
    this.router.put(
      "/deliveringRequest/:requestId",
      this.authVerify.getUserByJwtToken,
      this.requestController.deliveringRequest
    );
    this.router.put(
      "/finalizeRequest/:requestId",
      this.authVerify.getUserByJwtToken,
      this.requestController.finalizeRequest
    );
    // this.router.put("/user/:id", this.userController.updateUser);
    // this.router.delete("/user/:id", this.userController.deleteUser);
  }
}
