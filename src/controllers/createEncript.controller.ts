import { Encriptedsentenses } from "@models/EncriptedSentenses";
import { Request, Response } from "express";
import CreateEncriptService, {
  EncriptSentense,
} from "@services/createEncript.service";
import { AppResponse } from "../@types/";

export default class CreateEncriptController {
  async handle(
    req: Request<EncriptSentense>,
    res: Response<AppResponse<Encriptedsentenses[]>>
  ) {
    try {
      const name = req.body;
      const createEncriptService = new CreateEncriptService();

      const encript = await createEncriptService.execute(name);
      if (!encript) {
        return res
          .status(400)
          .json({ success: false, message: "Error. Try Again." });
      }

      return res
        .status(201)
        .json({ success: true, message: "Name encripted", data: encript });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
