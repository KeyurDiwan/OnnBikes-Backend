const express = require("express");
const  connect  = require("./src/configs/db");
const passport = require("./src/configs/passport");


const userController = require("./src/controllers/user.controller")

const app = express();

app.use(express.json());

app.use("/user",userController)

app.use(passport.initialize());



passport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});
passport.deserializeUser(function (user, done) {
  done(err, user);
});

app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/auth/google/failure",
    }),
    function (req, res) {
      return res.status(201).json({ user: req.user.user, token: req.user.token });
    }
  );
  
  app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong");
  });


const start = async()=>{
await connect();

app.listen(2525,()=>{
    console.log("Listening to port 2525")
})

}
module.exports = start