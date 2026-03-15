app.get("/user", (req, res) => {
  const name = req.query.name;

  const query = "SELECT * FROM users WHERE name = '" + name + "'";

  db.query(query, (err, result) => {
    res.send(result);
  });
});
