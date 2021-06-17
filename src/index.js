import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(2000, () => {
  console.log("listening on http://localhost:2000");
});
