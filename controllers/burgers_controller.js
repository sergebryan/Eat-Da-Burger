// This project is running through express framework

// Import Express
const express = require("express");
// Import Burger.js File
const burger = require("../models/burger.js");
// Creation of router for the application
const router = express.Router();

// Here comes the api, which will be executed
// Basically we will make three apis
//1. For index.html page, to show main page, and get all the burgers and load them
//2. For inserting the burger to data
//3. To upfate the burger is someone wants to devour it

// First Api to show page
router.get("/", async function (req, res) {
    const burgerData = await burger.selectAll();
    const newObjectBurger = {
        burgers: burgerData
    };
    res.render("index", newObjectBurger);
});
// Second api to insert data
router.post("/api/burgers", async function (req, res) {
    const insertResult = await burger.insertOne(req.body.burger_name);
    res.json({ id: insertResult.insertId });
});

// Third api to update burger value
router.put("/api/burgers/:id", async function (req, res) {
    const burgerId = req.params.id;
    const burgerDevoured = req.body.devoured;
    const result = await burger.updateOne(burgerDevoured, burgerId);
    if (result.changedRows != 0) {
        // Changed
        res.status(200).end();
    }
    else {
        // No change, that means id is wrong
        return res.status(404).end();
    }
});
// Exporting the router at the end of file
module.exports = router;