select * from request 
where (
	player1 is null 
	or player2 is null 
	or player3 is null
)