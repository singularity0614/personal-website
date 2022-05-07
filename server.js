const express = require('express');
const bodyParser = require('body-parser');
const path = require(`path`);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});