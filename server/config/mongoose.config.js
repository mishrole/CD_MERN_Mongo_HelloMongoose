const dotenv = require("dotenv");
dotenv.config();

const host = process.env.DB_HOST || "127.0.0.1"; // * Default host (localhost)
const port = process.env.DB_PORT || 27017; // * Default port
const user = process.env.DB_USER || "admin"; // * Default user
const password = process.env.DB_PWD || "netwitness"; // * Default pwd
const database = "mongoose_test";

const mongoose = require("mongoose");

mongoose
.connect(`mongodb://${user}:${password}@${host}:${port}/${database}`, {
// .connect(`mongodb://${host}:${port}/${database}`, { // ! Unsecured
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong when connecting to the database", err));