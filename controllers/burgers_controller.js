
var express = require("express");
var db = require("../models");
var router = express.Router();

//Get
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//Create
router.post("/", function(req, res) {

  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: 0
  }).then(function(data) {
    var hbsObject ={
      burger: data
    }
    res.redirect("/");
  });
});

//Update
router.put("/:id", function(req, res) {

  db.Burger.update({
    devoured: req.body.devoured
  },
  {
    where: {
      id: req.params.id
    }
  }).then(function(data){
    res.redirect("/");
  });
});

//Destroy
router.delete("/:id", function(req, res) {

  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
