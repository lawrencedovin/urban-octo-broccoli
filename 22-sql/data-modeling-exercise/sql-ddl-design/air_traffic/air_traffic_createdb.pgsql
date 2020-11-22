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

INSERT INTO countries 
    (name)
VALUES
    ('United States'), ('Japan'), ('France'), ('UAE'), ('Brazil'),
    ('United Kingdom'), ('Mexico'), ('Morocco'),  ('China'), ('Chile');

-- 1 | United States   6 | United Kingdom
-- 2 | Japan           7 | Mexico
-- 3 | France          8 | Morocco
-- 4 | UAE             9 | China
-- 5 | Brazil         10 | Chile

INSERT INTO cities
    (name)
VALUES
    ('Washington DC'), ('Tokyo'), ('Los Angeles'), ('Seattle'), ('Paris'), 
    ('Dubai'), ('New York'), ('Cedar Rapids'), ('Charlotte'), ('Sao Paolo'),
    ('London'), ('Las Vegas'), ('Mexico City'), ('Casablanca'), ('Beijing'),
    ('Chicago'), ('New Orleans'), ('Santiago');

-- 1 | Washington DC       6 | Dubai           11 | London         16 | Chicago
-- 2 | Tokyo               7 | New York        12 | Las Vegas      17 | New Orleans
-- 3 | Los Angeles         8 | Cedar Rapids    13 | Mexico City    18 | Santiago
-- 4 | Seattle             9 | Charlotte       14 | Casablanca
-- 5 | Paris              10 | Sao Paolo       15 | Beijing

INSERT INTO locations
    (country_id, city_id)
VALUES
    (1, 1), (2, 2), (1, 3), (1, 4), (3, 5), 
    (4, 6), (1, 7), (1, 8), (1, 9), (5, 10),
    (6, 11), (1, 12), (7, 13), (8, 14), (9, 15),
    (1, 16), (1, 17), (10, 18);

-- 1 | Washington DC       6 | Dubai           11 | London         16 | Chicago
-- 2 | Tokyo               7 | New York        12 | Las Vegas      17 | New Orleans
-- 3 | Los Angeles         8 | Cedar Rapids    13 | Mexico City    18 | Santiago
-- 4 | Seattle             9 | Charlotte       14 | Casablanca
-- 5 | Paris              10 | Sao Paolo       15 | Beijing