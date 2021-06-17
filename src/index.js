import express from "express";
import pool from "./database";

const app = express();
const router = express.Router();
const port = 3000;

// run db migration
pool
  .query(
    `create table IF NOT EXISTS request (
  id serial primary key, 
	creator text not null,
	player1 text,
	player2 text,
	player3 text,
	created_on TIMESTAMP NOT NULL
  );`
  )
  .then((dbres) => {
    console.log(dbres.rows[0]);
  })
  .catch((e) => console.error(e.stack));

router.get("/getAllOpenRequests", (req, res) => {
  pool
    .query(
      `
    select * from request 
    where (
	    player1 is not null 
	    or player2 is not null 
	    or player3 is not null
    )`
    )
    .then((dbres) => {
      res.send(dbres.rows[0]);
    })
    .catch((e) => console.error(e.stack));
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
