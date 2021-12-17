
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const connect = require("./configs/db");
const homeController = require("./controllers/home.controller");
const filterprodController = require("./controllers/filterProduct.controllers");
const arroflocationController = require("./controllers/arrofLocation.controller");
const bikesobjectController = require("./controllers/bikesobject.controller");

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public/")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");


app.use("/home", homeController);

app.use("/safety", filterprodController);
app.use("/arrofLocation", arroflocationController);
app.use("/bikesObject", bikesobjectController);


app.listen(1234, async () => {
    await connect();
    console.log("listening on port 1234..!");
})