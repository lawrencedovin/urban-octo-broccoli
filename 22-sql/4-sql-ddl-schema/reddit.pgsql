CREATE DATABASE reddit_db;

\c reddit_db;

CREATE TABLE posts (
    title TEXT,
    username TEXT,
    link TEXT    
);

INSERT INTO posts
(title, username, link)
VALUES
('lol my dog funny', 'doglover', 'www.abc.com');

SELECT * FROM posts;