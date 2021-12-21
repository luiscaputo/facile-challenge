import { Request, Response } from "express";
import { AppResponse } from "../@types";
import { Encriptedsentenses } from "@models/EncriptedSentenses";
import ListAllNamesServices from "@services/listAllNames.service";

export default class ListAllNamesController {
  async handle(
    _: Request<any>,
    res: Response<AppResponse<Encriptedsentenses[]>>
  ): Promise<any> {
    try {
      const listAllNamesServices = new ListAllNamesServices();
      const allNames = await listAllNamesServices.execute();

      return res
        .status(200)
        .json({ success: true, message: "All Names", data: allNames });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
