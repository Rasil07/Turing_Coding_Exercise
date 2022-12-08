import mongoose from "mongoose";

function MongoClient(config: Record<any, any>) {
  async function connect() {
    mongoose.set("strictQuery", false);
    return mongoose
      .connect(config.db_uri, {
        dbName: config.db_name,
      })
      .then(() => console.log("Mongo Db connected"));
  }
  return {
    connect,
  };
}

export default MongoClient;
