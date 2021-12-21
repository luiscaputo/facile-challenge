import { getCustomRepository } from "typeorm";
import { encript } from "../utils/functions";
import EncriptedSentensesRepository from "@repositories/EncriptedSentenses.repository";
import { Encriptedsentenses } from "@models/EncriptedSentenses";

export type EncriptSentense = {
  name: string;
};

export default class CreateEncriptService {
  async execute({ name }: EncriptSentense) {
    try {
      const encriptSentenseRepository = getCustomRepository(
        EncriptedSentensesRepository
      );

      const alreadyExistsName = await encriptSentenseRepository.find({
        where: { name },
      });
      if (alreadyExistsName.length > 0) {
        throw new Error("Already Exists this name.");
      }

      const encriptedName = encript(name);

      const encriptedSentences = new Encriptedsentenses();
      encriptedSentences.name = name;
      encriptedSentences.encriptedName = encriptedName;

      await encriptSentenseRepository.save(encriptedSentences);

      return [
        {
          id: encriptedSentences.id,
          encripted_name: encriptedSentences.encriptedName,
        },
      ];
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
