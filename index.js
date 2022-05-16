var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});
// Listen to the App Engine-specified port, or 8080 otherwise
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT, "..."));
});
