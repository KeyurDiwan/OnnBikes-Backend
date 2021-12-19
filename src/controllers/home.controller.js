const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return res.render("home");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/safety", async (req, res) => {
  try {
    return res.render("safety");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/faq1", async (req, res) => {
  try {
    return res.render("faq1");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/login", async (req, res) => {
  try {
    return res.render("login");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/signup", async (req, res) => {
  try {
    return res.render("signup");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.get("/faq1/solution", async (req, res) => {
  try {
    return res.render("solution");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/safety/blog", async (req, res) => {
  try {
    return res.render("BLOGpage");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/safety/offers", async (req, res) => {
  try {
    return res.render("offers");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/safety/faq1", async (req, res) => {
  try {
    return res.render("faq1");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/rideBooking", async (req, res) => {
  try {
    return res.render("ride_booking");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.get("/rideBooking/checkout", async (req, res) => {
  try {
    return res.render("checkout");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/rideBooking/checkout/payment", async (req, res) => {
  try {
    return res.render("payment");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
