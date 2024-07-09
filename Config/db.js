const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb://52.66.254.213:27017/plant_app`);

connection.on('open', () => {
    console.log("MongoDB Connected");
}).on('error', (error) => {
    console.log("MongoDB Connection error:", error);
});

module.exports = connection;
