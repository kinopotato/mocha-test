const db = require("./db.js");

module.exports.handleSignup = (email, password) => {
  //check if the email already exist

  //es6 syntax
  db.saveUser({email, password});
  //send welcome email
}