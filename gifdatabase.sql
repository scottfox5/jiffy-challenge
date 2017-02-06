CREATE DATABASE gif_db;

CREATE TABLE gifs (
	id SERIAL PRIMARY KEY,
	url TEXT,
	comment TEXT
);

INSERT INTO gifs (url, comment)
VALUES ('http://media2.giphy.com/media/pOKrXLf9N5g76/giphy.gif', 'this is funny');

INSERT INTO gifs (url, comment)
VALUES ('http://media4.giphy.com/media/l2JhGYxcjMcKqiaHu/giphy.gif', 'this is not funny');
