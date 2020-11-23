-- from the terminal run:
-- psql < music_old.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE artists
(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE albums
(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE producers
(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE producers_songs
(
    id SERIAL PRIMARY KEY,
    producer_id INTEGER NOT NULL REFERENCES producers(id),
    song_id INTEGER NOT NULL REFERENCES songs(id)
);

CREATE TABLE artists_songs
(
    id SERIAL PRIMARY KEY,
    artist_id INTEGER NOT NULL REFERENCES artists(id),
    songs_id INTEGER NOT NULL REFERENCES songs(id)
);

CREATE TABLE songs
(
    id SERIAL PRIMARY KEY,
    title TEXT,
    duration_in_seconds INTEGER,
    release_date DATE,
    album_id INTEGER NOT NULL REFERENCES albums(id)
);

-- CREATE TABLE songs
-- (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   duration_in_seconds INTEGER NOT NULL,
--   release_date DATE NOT NULL,
--   artists TEXT[] NOT NULL,
--   album TEXT NOT NULL,
--   producers TEXT[] NOT NULL
-- );

INSERT INTO artists
    (name)
VALUES
    ('Hanson'), ('Queen'), ('Mariah Cary'), ('Boyz II Men'), ('Lady Gaga'), 
    ('Bradley Cooper'), ('Nickelback'), ('Jay Z'), ('Alicia Keys'), ('Katy Perry'), 
    ('Juicy J'), ('Maroon 5'), ('Christina Aguilera'), ('Avril Lavigne'), ('Destiny''s Child');

--  1 | Hanson                           11 | Juicy J                
--  2 | Queen                            12 | Maroon 5             
--  3 | Mariah Cary                      13 | Christina Aguilera        
--  4 | UBoyz II Men                     14 | Avril Lavigne                    
--  5 | Lady Gaga                        15 | Destiny's Child                     
--  6 | Bradley Cooper                     
--  7 | Nickelback          
--  8 | Jay Z    
--  9 | Alicia Keys
-- 10 | Katy Perry

INSERT INTO albums
    (name)
VALUES
    ('Middle of Nowhere'), ('A Night at the Opera'), ('Daydream'), ('A Star Is Born'), ('Silver Side Up'), 
    ('The Blueprint 3'), ('Prism'), ('Hands All Over'), ('Let Go'), ('The Writing''s on the Wall');

--  1 | Middle of Nowhere                                    
--  2 | A Night at the Opera                                    
--  3 | Daydream                            
--  4 | A Star Is Born                                     
--  5 | Silver Side Up                                           
--  6 | The Blueprint 3
--  7 | Prism                    
--  8 | Hands All Over          
--  9 | Let Go  
-- 10 | The Writing's on the Wall

INSERT INTO producers
    (name)
VALUES
    ('Dust Brothers'), ('Stephen Lironi'), ('Roy Thomas Baker'), ('Walter Afanasieff'), ('Benjamin Rice'), 
    ('Rick Parashar'), ('Al Shux'), ('Max Martin'), ('Cirkut'), ('Shellback'), 
    ('Benny Blanco'), ('The Matrix'), ('Darkchild');

--  1 | Dust Brothers                      11 | Benny Blanco               
--  2 | Stephen Lironi                     12 | The Matrix             
--  3 | Roy Thomas Baker                   13 | Darkchild       
--  4 | Walter Afanasieff                                       
--  5 | Benjamin Rice                                          
--  6 | Rick Parashar                     
--  7 | Al Shux         
--  8 | Max Martin   
--  9 | Cirkut
-- 10 | Shellback


-- INSERT INTO songs
--   (title, duration_in_seconds, release_date, artists, album, producers)
-- VALUES
--   ('MMMBop', 238, '04-15-1997', '{"Hanson"}', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
--   ('Bohemian Rhapsody', 355, '10-31-1975', '{"Queen"}', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
--   ('One Sweet Day', 282, '11-14-1995', '{"Mariah Cary", "Boyz II Men"}', 'Daydream', '{"Walter Afanasieff"}'),
--   ('Shallow', 216, '09-27-2018', '{"Lady Gaga", "Bradley Cooper"}', 'A Star Is Born', '{"Benjamin Rice"}'),
--   ('How You Remind Me', 223, '08-21-2001', '{"Nickelback"}', 'Silver Side Up', '{"Rick Parashar"}'),
--   ('New York State of Mind', 276, '10-20-2009', '{"Jay Z", "Alicia Keys"}', 'The Blueprint 3', '{"Al Shux"}'),
--   ('Dark Horse', 215, '12-17-2013', '{"Katy Perry", "Juicy J"}', 'Prism', '{"Max Martin", "Cirkut"}'),
--   ('Moves Like Jagger', 201, '06-21-2011', '{"Maroon 5", "Christina Aguilera"}', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
--   ('Complicated', 244, '05-14-2002', '{"Avril Lavigne"}', 'Let Go', '{"The Matrix"}'),
--   ('Say My Name', 240, '11-07-1999', '{"Destiny''s Child"}', 'The Writing''s on the Wall', '{"Darkchild"}');
