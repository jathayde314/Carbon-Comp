//For secure connection:
const fs = require('fs');
const express = require('express');
const { Pool } = require("pg");
const router = express.Router();
const bodyParser = require('body-parser');

// Configure the database connection.

const pool = new Pool({
    user: "r",
    password: "0yTxOxsLmJHe20Yj",
    host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
    database: "frank-iguana-1618.bank",
    port: 26257,

    //For secure connection:
    ssl: {
        ca: fs.readFileSync('cc-ca.crt')
            .toString()
    }
});

router.post('/submit-element', async (req, res, next) => {
    text = req.body.command;
    pool.query(text, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results);
    })
    res.status(200).json({ status: 'ok' });
});

router.post('/friends', async (req, res, next) => {
    var data_results;
    text = req.body.command;
    pool.query(text, (error, results) => {
        if (error) {
            throw error
        }
        console.log(data_results);
        data_results = results.rows;
    }) 
    res.json(data_results);
});

module.exports = router;