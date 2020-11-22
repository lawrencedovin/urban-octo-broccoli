-- from the terminal run:
-- psql < outer_space.pgsql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space;

CREATE TABLE moons (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL
);

CREATE TABLE galaxies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE orbits (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbit_id INTEGER NOT NULL REFERENCES orbits(id),
  galaxy_id INTEGER NOT NULL REFERENCES galaxies(id)
);

CREATE TABLE planets_moons (
  id SERIAL PRIMARY KEY,
  planets_id INTEGER NOT NULL REFERENCES planets(id),
  moons_id INTEGER REFERENCES moons(id)
);

INSERT INTO moons 
  (name)
VALUES
  ('The Moon'), ('Phobos'), ('Deimos'), ('Naiad'), ('Thalassa'), ('Despina'),
  ('Galatea'), ('Larissa'), ('S/2004 N 1'), ('Proteus'), ('Triton'), ('Nereid'),
  ('Halimede'), ('Sao'), ('Laomedeia'), ('Psamathe'), ('Neso');

INSERT INTO galaxies
  (name)
VALUES
  ('Milky Way'), ('Whirlpool'), ('Cartwheel'), ('Black Eye Galaxy'), ('Messier 63');

INSERT INTO orbits
  (name)
VALUES
  ('The Sun'), ('Proxima Centauri'), ('Gliese 876');

INSERT INTO planets
  (name, orbital_period_in_years, orbit_id, galaxy_id)
VALUES
  ('Earth', 1, 1, 1),
  ('Mars', 1.88, 1, 1),
  ('Venus', 0.62, 1, 1),
  ('Neptune', 164.8, 1, 1),
  ('Proxima Centauri b', 0.03, 2, 1),
  ('Gliese 876', 0.23, 3, 1);

INSERT INTO planets_moons
  (planets_id, moons_id)
VALUES
  (1, 1),
  (2, 2),
  (2, 3);

INSERT INTO planets_moons
  (planets_id)
VALUES
  (3);

INSERT INTO planets_moons
  (planets_id, moons_id)
VALUES
  (4, 4), (4, 5), (4, 6), (4, 7), (4, 8), (4, 9),
  (4, 10), (4, 11), (4, 12), (4, 13), (4, 14), (4, 15),
  (4, 16), (4, 17);

INSERT INTO planets_moons
  (planets_id)
VALUES
  (5),
  (6);