
const mongoose = require("mongoose");

const filterProdSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Modal: { type: String, required: true },
    img: { type: String, required: true },
    MonthP: { type: String, required: true },
    MonthDur: { type: String, required: true },
    YearP: { type: String, required: true },
    YearDur: { type: String, required: true },
    Key: { type: String, required: false },
    Key2: { type: String, required: false },
    Sport: { type: String, required: false },
    Cruiser: { type: String, required: false },
    Comfort: { type: String, required: false },
    Gearless: { type: String, required: false },
    Scooter: { type: String, required: false },
});

const Filterprod = mongoose.model("filterProduct", filterProdSchema);

module.exports = Filterprod



