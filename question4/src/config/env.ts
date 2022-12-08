import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  db_uri: process.env.DB_URI,
  db_name: process.env.DB_NAME,
  base_url: process.env.BASE_URL || "/api/v1",
  use_db: process.env.USE_DB,
};
