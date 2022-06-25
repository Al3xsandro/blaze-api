import "dotenv/config"

import express from "express";
import cors from "cors";

import "express-async-errors";

import createConnection from "../mongoose/index";
createConnection();

import { routes } from "./routes";
import { HandleError } from "./middlewares/handleError";
import { blazeProvider } from "../providers/blaze";

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(routes);

app.use(HandleError);

blazeProvider();

export { app };