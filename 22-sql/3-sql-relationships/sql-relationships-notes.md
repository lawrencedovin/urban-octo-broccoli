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