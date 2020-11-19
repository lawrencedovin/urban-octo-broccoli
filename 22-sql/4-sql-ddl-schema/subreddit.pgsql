CREATE TABLE subreddits (
    id SERIAL,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INTEGER CHECK (subscribers > 0),
    is_private BOOLEAN
);

INSERT INTO subreddits
(name, description, subscribers, is_private)
VALUES
('pumpkin', 'Your fav pg 4 pumpkins', 5, false);

CREATE TABLE users (
    id SERIAL,
    username VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);