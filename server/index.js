const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000


app.listen(5000, () => {
    console.log("Server is running on Port: " + PORT)
});