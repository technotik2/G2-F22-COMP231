const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dbUrl = "mongodb+srv://peyman:iraniran1394@dbserver.lven6.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", () => {
console.log("could not connect");
});
db.once("open", () => {
console.log("> Successfully connected to database");
});
};
module.exports = { connect };

// 
