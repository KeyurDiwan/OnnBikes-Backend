
const express = require("express");
const router = express.Router();

const Bikesobject = require("../models/bikesobject.model");
const crudController = require("./crud.controller");

router.post("/", crudController(Bikesobject).post);
router.get("/", crudController(Bikesobject).get);
router.get("/:id", crudController(Bikesobject).getOne);
router.patch("/:id", crudController(Bikesobject).patchOne);
router.delete("/:id", crudController(Bikesobject, "bikesobject").deleteOne);

module.exports = router

