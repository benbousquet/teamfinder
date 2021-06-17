import express from "express";
import pool from "./database";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  pool
    .query("SELECT NOW() as now")
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
