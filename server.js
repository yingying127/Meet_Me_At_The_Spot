const express = require('express')
const app = express()
const path = require('path')
const rest = require("restler");

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

// rest.get("https://api.harvardartmuseums.org/object", {
//     query: {
//         apikey: "8e787d5e-154a-4abd-877c-06d4c150ee6a",
//         title: "dog",
//         fields: "objectnumber,title,dated",
//     }
// }).on("complete", function(data, response) {
//     ("#title").append(data)
// });

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`curating on port ${port}`))