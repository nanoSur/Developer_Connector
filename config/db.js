const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const ConnectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected!..");
  } catch (err) {
    console.error(err.message);
    //exit process with a failure
    process.exit(1);
  }
};
module.exports = ConnectDB;
