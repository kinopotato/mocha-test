const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.status(404).send({
    error: "page not found",
    name: "toDo app v1.0"
  });
})

app.get("/users", (req, res) => {
  res.send([{
    name: "Andrew Mead",
    age: 25
  }, {
    name: "Kino Potato",
    age: 28
  }, {
    name: "Brad n'Butter",
    age: 99
  }, {
    name: "Brandillo SuperMacho",
    age: 999
  }])
})

app.listen(3000);
module.exports.app = app;