import { getRepository } from "typeorm";
import { Encriptedsentenses } from "@models/EncriptedSentenses";
import { decript } from "../utils/functions";

export default class getEncriptedNameService {
  async execute(id: string) {
    try {
      const encriptedName = await getRepository(Encriptedsentenses).findOne(id);

      if (!encriptedName) {
        throw new Error("Name not found.");
      }
      const decripting = decript(encriptedName.encriptedName);

      return [{ id: encriptedName.id, decripted_name: decripting }];
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
