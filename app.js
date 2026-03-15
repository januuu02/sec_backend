const express = require("express");
const app = express();

const dbUser = "admin";
const dbPassword = "password123";

app.get("/", (req, res) => {
    res.send("Backend server running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
