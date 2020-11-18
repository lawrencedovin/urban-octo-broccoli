# One-to-Many Relationships

###  Create database and call it
```
psql < movies.sql
psql movies_example
```

###  Setting up a foreign key constraint movies with FK studios
```
CREATE TABLE studios
 (id SERIAL PRIMARY KEY,
  name TEXT,
  founded_in TEXT);
 
CREATE TABLE movies
 (id SERIAL PRIMARY KEY,
  title TEXT,
  studio_id INTEGER REFERENCES studios (id));
```

# Working with One-to-Many Relationships  
###  FK Constraint
```
INSERT INTO studios (name, founded_in) VALUES
 ('Walt Disney Studios', '1953-06-23'),
 ('20th Century Fox', '1935-05-31'),
 ('Universal Pictures', '1912-04-30');

INSERT INTO movies (title, studio_id)
 VALUES ('Star Wars: The Force Awakens', 1);

INSERT INTO studios(name, founded_in) VALUES ('Warner Bros', '1950-10-10');

INSERT INTO movies (title, release_year, runtime, rating, studio_id)
 VALUES ('Batman', 2018, 130, 'PG-13', 4);
```
### Deletion
```
--Option 1: Clear out the studio_id columns, keeps movie but studio becomes NULL
UPDATE movies 
 SET studio_id=NULL
 WHERE studio_id=1;

DELETE FROM studios
 WHERE id=1;

--Option 2: Delete the movies associated with that studio first.
DELETE FROM movies
 WHERE studio_id=1;

DELETE FROM studios
 WHERE id=1;
```

# Inner Joins
###  Sample Inner Join
```
SELECT title, name
 FROM movies
 JOIN studios
 ON movies.studio_id = studios.id;
```

###  Aliases
```
SELECT movies.id as movies_id, studios.id as studios_id
 FROM movies
 JOIN studios
 ON movies.studio_id = studios.id;
```

# Outer Joins
### Left Join
```
-- All rows from first table(left), combined with matching
-- rows from the second table (right)

SELECT title, name AS studio_name
 FROM movies
 LEFT JOIN studios
 ON movies.studio_id = studios.id;
```

### Right Join
```
-- The matching rows from the first table(left), combined with all the rows from the second table (right)
-- rows from the second table (right)

SELECT title, name AS studio_name
 FROM movies
 RIGHT JOIN studios
 ON movies.studio_id = studios.id;
```

### Full Join
```
-- All the rows from both table (left and right).

SELECT *
 FROM movies
 FULL JOIN studios
 ON movies.studio_id = studios.id;
```

### Count of how many movies a studio produced
```

SELECT name, COUNT(*)
 FROM movies
 JOIN studios
 ON movies.studio_id = studios.id
 GROUP BY studios.name
 ORDER BY COUNT(*);
```

# Many-to-Many Insert
### Setting Up Actors and Roles
```
CREATE TABLE actors
 (id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  birth_date TEXT);

CREATE TABLE roles
 (id SERIAL PRIMARY KEY,
  movie_id INTEGER REFERENCES movies (id),
  actor_id INTEGER REFERENCES actors (id));
  
```

### Inserting into roles
```
INSERT INTO roles(movie_id, actor_id)
 VALUES
 (10, 4),
 (10, 5),
 (10, 6),
 (11, 4);
```

### When DELETE CASCADE is setup
```
DELETE FROM actors
 WHERE id = 1;
```

# Many-to-Many Joins
### Join both roles and actors tables
```
SELECT *
 FROM roles
 JOIN actors
 ON roles.actor_id = actors.id;
```

### Get names and number of movies of actors
```
SELECT first_name, last_name, COUNT(*) as total_roles
 FROM roles
 JOIN actors
 ON roles.actor_id = actors.id
 GROUP BY actors.id;
```

### Get names and number of movies of actors order by the highest
```
SELECT first_name, last_name, COUNT(*) as total_roles
 FROM roles
 JOIN actors
 ON roles.actor_id = actors.id
 GROUP BY actors.id
 ORDER BY COUNT(*) DESC;
```

### Joining roles, actors and movies table
```
SELECT *
 FROM roles
 JOIN actors
 ON roles.actor_id = actors.id
 JOIN movies
 ON roles.movie_id = movies.id;
```

### Selecting movie title, actor names using aliases
```
SELECT m.title, a.first_name, a.last_name
 FROM roles r
 JOIN movies m
 ON r.movie_id = m.id
 JOIN actors a
 ON r.actor_id = a.id;
```

### Selecting movie release year, title and actor's name
```
SELECT m.release_year, m.title, a.first_name, a.last_name
 FROM movies m
 JOIN roles r
 ON m.id = r.movie_id
 JOIN actors a
 ON a.id = r.actor_id
 WHERE m.release_year > 2000
 ORDER BY m.release_year;
```
