select * from request 
where (
	player1 is not null 
	or player2 is not null 
	or player3 is not null
)