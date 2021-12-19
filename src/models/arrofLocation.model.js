const mongoose = require("mongoose");

const arrofLocationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  location: { type: String, required: true },
  timing: { type: String, required: true },
  reference: { type: String, required: true },
  address: { type: String, required: true },
});

const Arroflocation = mongoose.model("arrofLocation", arrofLocationSchema);

module.exports = Arroflocation;
