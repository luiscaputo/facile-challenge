import { EntityRepository, Repository } from "typeorm";
import { Encriptedsentenses } from "../models/EncriptedSentenses";

@EntityRepository(Encriptedsentenses)
export default class EncriptedSentensesRepository extends Repository<Encriptedsentenses> {}
