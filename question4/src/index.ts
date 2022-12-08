import express from "express";
import expressConfig from "./framework/webserver/express_config";
import serverConfig from "./framework/webserver/server_config";

const app = express();

expressConfig(app);

serverConfig(app).startServerWithMemory();

export default app;
