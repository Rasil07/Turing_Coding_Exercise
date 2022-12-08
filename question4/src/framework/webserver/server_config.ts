import { Express } from "express";
import MongoClient from "../database/dbClient";
import CONFIG from "../../config/env";

function serverConfig(app: Express) {
  async function startServerWithMemory() {
    if (CONFIG.use_db === "true") {
      await MongoClient(CONFIG).connect();
    }

    app.listen(CONFIG.port, () => {
      console.info(`Example app listening on port ${CONFIG.port}`);
    });
  }

  return {
    startServerWithMemory,
  };
}

export default serverConfig;
