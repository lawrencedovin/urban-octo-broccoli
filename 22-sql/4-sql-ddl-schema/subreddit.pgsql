CREATE TABLE subreddits (
    id SERIAL,
    name VARCHAR(15),
    description TEXT,
    subscribers INTEGER,
    is_private BOOLEAN
);

INSERT INTO subreddits
(name, description, subscribers, is_private)
VALUES
('pumpkin', 'Your fav pg 4 pumpkins', 10000, false);