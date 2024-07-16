const mongoose = require("mongoose");

const connection = mongoose.createConnection(`mongodb://plantapp:admin@52.66.254.213:27017/plant_app?directConnection=true`);

connection
  .on("open", () => {
    console.log("MongoDB Connected");
  })
  .on("error", (error) => {
    console.log("MongoDB Connection error:", error);
  });

module.exports = connection;
