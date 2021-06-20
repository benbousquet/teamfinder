import express, { json } from "express";
import pool from "./database";

const app = express();
const router = express.Router();
const port = 3000;

// middleware
app.use(json());

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
	    player1 is null 
	    or player2 is null 
	    or player3 is null
    )`
    )
    .then((dbres) => {
      if (dbres.rows == null) {
        res.send({});
      } else {
        res.send(dbres.rows);
        console.log(dbres.rows);
      }
    })
    .catch((e) => console.error(e.stack));
});

router.post("/createRequest", (req, res) => {
  let { creator } = req.body;

  pool
    .query(
      `
    insert into request(creator, created_on)
    values ($1::text, NOW())
    `,
      [creator]
    )
    .then((dbres) => {
      res.status(201).send({ message: "success" });
    })
    .catch((e) => {
      console.error(e.stack);
      res.send({ error: e.stack });
    });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
