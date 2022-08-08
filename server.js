const { request } = require("express");
var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("<h3>Thanks for Party</h3>");
});

app.listen(7000);
