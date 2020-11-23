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

INSERT INTO songs
    (title, duration_in_seconds, release_date, album_id)
VALUES
    ('MMMBop', 238, '04-15-1997', 1),
    ('Bohemian Rhapsody', 355, '10-31-1975', 2),
    ('One Sweet Day', 238, '11-14-1995', 3),
    ('Shallow', 216, '09-27-2018', 4),
    ('How You Remind Me', 223, '08-21-2001', 5),
    ('New York State of Mind', 276, '10-20-2009', 6),
    ('Dark Horse', 215, '12-17-2013', 7),
    ('Moves Like Jagger', 201, '06-21-2011', 8),
    ('Complicated', 244, '05-14-2002', 9),
    ('Say My Name', 240, '11-07-1999', 10);

--  1 | MMMBop                                             
--  2 | Bohemian Rhapsody                                          
--  3 | One Sweet Day                    
--  4 | Shallow                                       
--  5 | How You Remind Me                                         
--  6 | New York State of Mind                   
--  7 | Dark Horse           
--  8 | Moves Like Jagger  
--  9 | Complicated
-- 10 | Say My Name


INSERT INTO producers_songs
    (producer_id, song_id)
VALUES
    (1, 1), (2, 1), (3, 2), (4, 3), (5, 4), 
    (6, 5), (7, 6), (8, 7), (9, 7), (10, 8), 
    (11, 8), (12, 9), (13, 10);

--  1 | Dust Brothers, MMMBop                                 11 | Benny Blanco, Moves Like Jagger              
--  2 | Stephen Lironi, MMMBop                                12 | The Matrix, Complicated             
--  3 | Roy Thomas Baker, Bohemian Rhapsody                   13 | Darkchild, Say My Name       
--  4 | Walter Afanasieff, One Sweet Day                                       
--  5 | Benjamin Rice, Shallow                                          
--  6 | Rick Parashar, How You Remind Me                     
--  7 | Al Shux, New York State of Mind         
--  8 | Max Martin, Dark Horse   
--  9 | Cirkut, Dark Horse
-- 10 | Shellback, Moves Like Jagger

INSERT INTO artists_songs
    (artist_id, song_id)
VALUES
    (1, 1), (2, 2), (3, 3), (4, 3), (5, 4),
    (6, 4), (7, 5), (8, 6), (9, 6), (10, 7),
    (11, 7), (12, 8), (13, 8), (14, 9), (15, 10);

--  1 | Hanson, MMMBop                                        11 | Juicy J, Dark Horse                
--  2 | Queen, Bohemian Rhapsody                              12 | Maroon 5, Moves Like Jagger             
--  3 | Mariah Cary, One Sweet Day                            13 | Christina Aguilera, Moves Like Jagger        
--  4 | Boyz II Men, One Sweet Day                            14 | Avril Lavigne, Complicated                    
--  5 | Lady Gaga, Shallow                                    15 | Destiny's Child, Say My Name                     
--  6 | Bradley Cooper, Shallow                     
--  7 | Nickelback, How You Remind Me          
--  8 | Jay Z, New York State of Mind  
--  9 | Alicia Keys, New York State of Mind
-- 10 | Katy Perry, Dark Horse