insert into request(creator, created_on) 
values ($1, NOW())
-- $1 creator