import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { NextFunction, Request, Response } from "express";
import { Encriptedsentenses } from "@models/EncriptedSentenses";
import { EncriptSentense } from "@services/createEncript.service";

export const encript = async (
  req: Request<EncriptSentense>,
  res: Response<AppResponse<Encriptedsentenses[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('O campo "name" é obrigatório.'),
  });
  await showError(req, res, next, schema);
};
