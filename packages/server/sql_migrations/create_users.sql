create table IF NOT EXISTS request (
	id serial primary key, 
	creator text not null,
	player1 text,
	player2 text,
	player3 text,
	created_on TIMESTAMP NOT NULL
)