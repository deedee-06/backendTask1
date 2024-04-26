const express = require("express");

const app = express();

const port = 3000;

app.get("/deedee", (req, res) => {
  res.send(
    "Hi! This is Deedee. The most recognized female developer. This is a get request"
  );
});

app.post("/deedee", (req, res) => {
  res.send("Hi, there. This is a post request");
});

app.patch("/deedee", (req, res) => {
  res.send("Hello senior dev! This is a patch request");
});

app.put("/deedee", (req, res) => {
  res.send("Hello senior dev! This is a put request");
});

app.delete("/deedee", (req, res) => {
  res.send("Hello senior dev! This is a delete request");
});

app.listen(port, () => {
  console.log("server is running");
});
