const express = require("express");
const app = express();

// XSS Vulnerable endpoint
app.get("/search", (req, res) => {
    const query = req.query.q;
    res.send("<h1>Search results for: " + query + "</h1>");
});

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
