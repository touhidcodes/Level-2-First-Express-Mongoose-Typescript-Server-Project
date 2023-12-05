import app from "./app";
import mongoose from "mongoose";
import config from "./config/config";

const PORT = 5000;

async function server() {
  try {
    await mongoose.connect(config.mongodb_uri as string);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
