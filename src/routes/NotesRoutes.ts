import { Router } from "express";
import NotesController from "../controllers/NotesController";
import authVerify from "../middleware/authVerify";

export default class NotesRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private NotesController: NotesController
  ) {
    this.router.post(
      "/productNote",
      this.authVerify.getUserBuyerByJwtToken,
      this.NotesController.postNotesProduct
    );
    this.router.get(
      "/productNote",
      this.authVerify.getUserBuyerByJwtToken,
      this.NotesController.getNotesProduct
    );
    this.router.post(
      "/deliverNote",
      this.authVerify.getUserBuyerByJwtToken,
      this.NotesController.postNotesDeliver
    );
    this.router.get(
      "/deliverNote",
      this.authVerify.getUserBuyerByJwtToken,
      this.NotesController.getNotesDeliver
    );
    this.router.post(
      "/storeNote",
      this.authVerify.getUserBuyerByJwtToken,
      this.NotesController.postNotesStore
    );
    this.router.get(
      "/storeNote",
      this.authVerify.getUserBuyerByJwtToken,
      this.NotesController.getNotesStore
    );
  }
}
