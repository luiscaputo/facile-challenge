import GetEncriptedNameService from "@services/getEncriptedName.service";
import { Request, Response } from "express";
import { AppResponse } from "../@types";

export default class GetEncriptedNameController {
  async handle(req: Request<string>, res: Response<AppResponse<string>>) {
    try {
      const id = req.params;
      const getEncriptedNameService = new GetEncriptedNameService();

      const getEncriptName = await getEncriptedNameService.execute(id);
      return res.status(200).json({
        success: true,
        message: "Name Decripted",
        data: getEncriptName,
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
