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

CREATE TABLE airlines (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE citizenships (
    id SERIAL PRIMARY KEY,
    location_id INTEGER NOT NULL REFERENCES locations(id)
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    birthday DATE,
    citizenship_id INTEGER NOT NULL REFERENCES citizenships(id)
);

CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    departure DATE,
    arrival DATE,
    airline_id INTEGER NOT NULL REFERENCES airlines(id),
    from_location_id INTEGER NOT NULL REFERENCES locations(id),
    to_location_id INTEGER NOT NULL REFERENCES locations(id)
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    seat TEXT,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    flight_id INTEGER NOT NULL REFERENCES flights(id)
);          