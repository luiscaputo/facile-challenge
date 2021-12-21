import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv-safe";
import routes from "src/routes";

import connection from "./database";

dotenv.config({
  allowEmptyValues: true,
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.development",
});

const app = express();

connection.create();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
