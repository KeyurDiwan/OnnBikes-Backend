
const express = require("express");
const router = express.Router();

const Filterprod = require("../models/filterProduct.model");
const crudController = require("./crudFilter.controllers");

router.post("/", crudController(Filterprod).post);
router.get("/filterPro", crudController(Filterprod).get);
router.get("/all", crudController(Filterprod).getOne);
router.patch("/:id", crudController(Filterprod).patchOne);
router.delete("/:id", crudController(Filterprod, "filterProduct").deleteOne);

module.exports = router

