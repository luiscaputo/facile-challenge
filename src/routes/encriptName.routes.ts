import Router from "express";

import { encript } from "../middlewares/encript.middleware";

import CreateEncriptController from "@controllers/createEncript.controller";
import GetEncriptedNameController from "@controllers/getEncriptedName.controller";
import ListAllNamesController from "@controllers/listAllNames.controller";

const router = Router();

const createEncriptController = new CreateEncriptController();
const getEncriptedNameController = new GetEncriptedNameController();
const listAllNamesController = new ListAllNamesController();

router.post("/encript", encript, createEncriptController.handle);
router.get("/decripted/:id", getEncriptedNameController.handle);
router.get("/encript-all", listAllNamesController.handle);

export default router;
