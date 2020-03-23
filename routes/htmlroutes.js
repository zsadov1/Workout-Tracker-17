const path = require("path");
const router = require("express").Router();

  router.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
  })

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "exercise.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "stats.html"));
  });

  module.exports = router;