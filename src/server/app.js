const express = require('express');
// Start up an instance of app
const app = express();

app.get("/", (req, res) => {
    res.send({msg: "server test"});
});

export {app};