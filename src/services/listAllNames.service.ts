import { getRepository } from "typeorm";
import { Encriptedsentenses } from "@models/EncriptedSentenses";

export default class ListAllNamesServices {
  async execute() {
    try {
      const encriptedSentences = await getRepository(Encriptedsentenses).find();
      if (encriptedSentences.length < 0) {
        throw new Error("Table Encriptedsentenses void.");
      }

      return encriptedSentences;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
