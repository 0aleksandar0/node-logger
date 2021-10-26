"use strict";

const http = require("http");

const express = require("express");

const app = express();

app.get("/blog/:year/:month/:day?", (req, res) => {
  console.log(`${req.method} ${req.path}`);

  if (req.query.format === "html") {
    return res.send(
      `<h1>${req.params.day}.${req.params.month}.${req.params.year}</h1>`
    ); //Route wird erzeugt
  }

  res.send({
    // send ruftautomatisch ein write auf mit dem übergebenen String und auch end um die Verbindung zu schließen
    year: req.params.year - 0,
    month: req.params.month - 0, // - 0 um string in Nummer umzuwandeln
    day: req.params.day - 0 || "01", // standart wird Tag auf 1 gesetzt wenn sonst nix angegeben ist
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
