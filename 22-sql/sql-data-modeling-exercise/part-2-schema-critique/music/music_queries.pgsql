-- Query for all artists
SELECT * FROM artists;

-- Query for all producers
SELECT * FROM producers;

-- Query for all albums
SELECT * FROM albums;

-- Query for all songs
SELECT * FROM songs;

-- Gets song title with corresponding album
SELECT title, albums.name
FROM songs
JOIN albums
ON album_id = albums.id;

-- Gets producer with corresponding song title and album name
SELECT producers.name AS producer_name, 
songs.title AS song_title,
albums.name AS album_name
FROM producers_songs
JOIN producers
ON producers_songs.producer_id = producers.id
JOIN songs
ON song_id = songs.id
JOIN albums
ON songs.album_id = albums.id; 

-- Gets artist with corresponding song title and album name
SELECT artists.name AS artist_name, 
songs.title AS song_title,
albums.name AS album_name
FROM artists_songs
JOIN artists
ON artists_songs.artist_id = artists.id
JOIN songs
ON song_id = songs.id
JOIN albums
ON songs.album_id = albums.id; 

-- Gets Lady Gaga songs with corresponding song title and album name
SELECT artists.name AS artist_name, 
songs.title AS song_title,
albums.name AS album_name,
producers.name AS producer_name

FROM artists_songs

JOIN artists
ON artists_songs.artist_id = artists.id

JOIN songs
ON song_id = songs.id

JOIN albums
ON songs.album_id = albums.id

JOIN producers_songs
ON producers_songs.song_id = songs.id

JOIN producers
ON producers_songs.producer_id = producers.id

WHERE albums.name = 'Prism';