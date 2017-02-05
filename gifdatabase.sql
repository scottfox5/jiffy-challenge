CREATE DATABASE gif_db;

CREATE TABLE gifs (
	id SERIAL PRIMARY KEY,
	url TEXT,
	comment TEXT
);

INSERT INTO gifs (url, comment)
VALUES ('http://giphy.com/embed/pOKrXLf9N5g76', 'this is funny');

INSERT INTO gifs (url, comment)
VALUES ('http://giphy.com/embed/13e3SmWdOtFEo8', 'this is not funny');
