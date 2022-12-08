import { Express, urlencoded, json } from "express";
import type { ErrorRequestHandler } from "express";
import routes from "../routes";

function expressConfig(app: Express) {
  app.use(json());
  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://some-accepted-origin');
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-type, Authorization, Cache-control, Pragma"
    );
    // Pass to next layer of middleware
    next();
  });

  const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
      error: err.message,
    });
  };

  routes(app);
  app.use(errorHandler);
}

export default expressConfig;
