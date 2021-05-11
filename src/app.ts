import express, { Express } from "express";

import user from "./router/user";

class App {
  public app: Express = express();

  constructor() {
    this.config();
    this.routes();
  }

  config(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/user", user);
  }
}

export default new App().app;
