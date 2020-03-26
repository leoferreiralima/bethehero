import cors from "cors";
import express from "express";

import routes from "./routes";
import "./config/env";
import "./database";

class AppController {
  constructor () {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares () {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes () {
    this.express.use(routes);
  }
}

export default new AppController().express;
