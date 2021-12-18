const express = require("express");
const router = express.Router();

const Arroflocation = require("../models/arrofLocation.model");
const crudController = require("./crud.controller");

router.post("/", crudController(Arroflocation).post);
router.get("/", crudController(Arroflocation).get);
router.get("/:id", crudController(Arroflocation).getOne);
router.patch("/:id", crudController(Arroflocation).patchOne);
router.delete("/:id", crudController(Arroflocation, "arroflocation").deleteOne);

module.exports = router;
