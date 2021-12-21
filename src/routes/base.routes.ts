import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    author: "Luís Afonso Caputo",
    title: "Facile_Challenge",
    version: 1.0,
    description: "This is a simple sentense encripter",
  });
});

export default router;
