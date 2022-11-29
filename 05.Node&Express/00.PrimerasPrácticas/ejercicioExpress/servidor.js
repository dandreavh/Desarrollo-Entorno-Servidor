const express = require('express');
const app = express();
const portServer = 4000;

app.get("/", (req, res) => {
    res.send("Congratulations, you're connected to Express Server!");
});

app.get("/ejemplojson", (req, res) => {
    res.send({
        name: "Andrea",
        age: 27,
        hobbies: ["cine", "leer", "cantar"]
    })
});

app.listen(portServer, () => {
    console.log(`Server is running on port ${portServer}`)
});