import { Request, Response } from "express";

export default interface ControllerInterface {
  index(req: Request, res: Response): Promise<Response>;
  show(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  edit(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}
