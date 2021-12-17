
const mongoose = require("mongoose");

const bikesobjSchema = new mongoose.Schema({
    name: { type: String, required: true },
    free: { type: String, required: true },
    excess: { type: Number, required: true },
    price: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
    imgLink: { type: String, required: true }
});

const Bikesobject = mongoose.model("bikesobject", bikesobjSchema);

module.exports = Bikesobject


