-- from the terminal run:
-- psql < air_traffic_createdb.pgsql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    country_id INTEGER NOT NULL REFERENCES countries(id),
    city_id INTEGER NOT NULL REFERENCES cities(id)
);