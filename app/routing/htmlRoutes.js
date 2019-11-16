app.get("/api/public", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });