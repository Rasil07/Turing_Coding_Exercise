import { Express, Router } from "express";
import fs from "fs";
import CONFIG from "../../config/env";

const routes = (app: Express) => {
  const router = Router();
  fs.readdirSync(__dirname).forEach(async function (route) {
    route = route.split(".")[0];
    // Ignore index (i.e. this file)
    if (route === "index") return;
    const moduleA = await import("./" + route).then((mod) => mod.default());

    router.use("/" + route, moduleA);
  });

  app.use(CONFIG.base_url, router);
};

export default routes;
