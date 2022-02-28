import { Router } from "express";
import CheckoutTransparentMercadoPagoController from "../controllers/CheckoutTransparentMercadoPagoController";
import ProductCategoryController from "../controllers/ProductCategoryController";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";


export default class CheckoutTransparentMercadoPago {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private mercadoPagoPayment: CheckoutTransparentMercadoPagoController
  ) {
      this.router.post('/process_payment', mercadoPagoPayment.payment)
   

  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
