-- from the terminal run:
-- psql < outer_space_createdb.pgsql

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