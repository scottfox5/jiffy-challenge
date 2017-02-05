var express = require("express");
var router = express.Router();
var pg = require("pg");
var config = { database: "gif_db" };
var pool = new pg.Pool(config);


// get request to fetch urls and comments from database
router.get("/", function(req, res) {

  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to DB", err);
      res.sendStatus(500);
      done();
    } else {
      client.query("SELECT * FROM gifs", function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          console.log("Got info from DB", result.rows);
          res.send(result.rows);
        }
      });
    }
  });
});

// post request to add url and comment to databse
router.post("/", function(req, res) {
  console.log('gifs', req.body);
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to DB", err);
      res.sendStatus(500);
      done();
    } else {
      client.query(
        "INSERT INTO gifs (url, comment) VALUES ($1, $2) RETURNING *;",
        [req.body.url, req.body.comment],
        function(err, result) {
          done();
          if (err) {
            console.log("Error querying DB", err);
            res.sendStatus(500);
          } else {
            console.log("Got info from DB", result.rows);
            res.send(result.rows);
          }
        }
      );
    }
  });
});

module.exports = router;
