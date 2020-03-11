  
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3003;

const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

app.get("/stats", (req,res)=> {
    res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get("/api/workouts", (req,res) => {

});

