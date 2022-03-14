//import express
const express = require("express");
const connectDB = require("./config/dbConnect");

//instance app
const app = express();
app.use(express.json());
//documentation dotenv
require("dotenv").config();

var cors = require("cors");
app.use(express.json());
app.use(express.static("public"));
app.use(express.json({ limit: "64mb" }));
app.use(express.urlencoded({ limit: "64mb", extended: true }));
app.use(cors());
// Connect DataBase
connectDB();

//Router
app.get("/", (req, res) => {
    res.send("Home Page Hello yaaaasmine");
});
//User
app.use("/api/user", require("./router/user"));
//Contact
app.use("/api/contact", require("./router/contact"));
//Product
app.use("/api/product", require("./router/product"));
//Port
const PORT = process.env.PORT;

//create server
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
