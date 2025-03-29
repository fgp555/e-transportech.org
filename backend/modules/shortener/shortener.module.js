const express = require("express");

const app = express();
app.use(express.json());

let dataMock = [
  { id: "1", short: "google", url: "https://www.google.com" },
  { id: "2", short: "example", url: "https://example.com" },
];

app.get("/shortener", (req, res) => {
  res.json(dataMock);
});

app.get("/:short", (req, res, next) => {
  const { short } = req.params;
  const entry = dataMock.find((item) => item.short === short);

  if (entry) {
    return res.redirect(entry.url);
  }

  next();
});

module.exports = app;
