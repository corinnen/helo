INSERT INTO username (username, password)
VALUES ($1, $2)
RETURNING *;