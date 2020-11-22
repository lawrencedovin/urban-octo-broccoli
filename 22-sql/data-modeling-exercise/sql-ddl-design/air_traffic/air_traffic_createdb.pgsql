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

--  1 | United States, Washington DC     11 | United Kingdom, London                
--  2 | Japan, Tokyo                     12 | United States, Las Vegas             
--  3 | United States, Los Angeles       13 | Mexico, Mexico City        
--  4 | United States, Seattle           14 | Morocco, Casablanca                    
--  5 | France, Paris                    15 | China, Beijing                      
--  6 | UAE, Dubai                       16 | United States, Chicago
--  7 | United States, New York          17 | United States, New Orleans
--  8 | United States, Cedar Rapids      18 | Chile, Santiago
--  9 | United States, Charlotte
-- 10 | Brazil, Sao Paolo        

INSERT INTO airlines
    (names)
VALUES
    ('United'), ('British Airways'), ('Delta'), ('TUI Fly Belgium'), ('Air China'), 
    ('American Airlines'), ('Avianca Brasil');

-- 1 | United
-- 2 | British Airways
-- 3 | Delta
-- 4 | TUI Fly Belgium
-- 5 | Air China
-- 6 | American Airlines
-- 7 | Avianca Brasil

INSERT INTO citizenships
    (location_id)
VALUES
    (1), (2), (3), (5), (6), (7), (8), (9), (10),
    (11), (12), (13), (14), (15), (16), (17), (18);

-- Represents the id numbers from locations ie id = 1 is United States, Washington DC

INSERT INTO customers
    (first_name, last_name, birthday, citizenship_id)
VALUES
    ('Jennifer', 'Finch', '1992-06-25', 1),
    ('Thadeus', 'Gathercoal', '1985-02-01', 2),
    ('Sonja', 'Pauley', '1940-10-15', 3),
    ('Waneta', 'Skeleton', '1996-04-12', 5),
    ('Berkie', 'Wycliff', '1987-12-28', 7),
    ('Alvin', 'Leathes', '1965-02-19', 8),
    ('Cory', 'Squibbes', '1982-08-20', 9);

INSERT INTO flights
    (departure, arrival, airline_id, from_location_id, to_location_id)
VALUES
    ('2018-04-08 09:00:00', '2018-04-08 12:00:00', 1, 1, 4),
    ('2018-12-19 12:45:00', '2018-12-19 16:15:00', 2, 2, 11),
    ('2018-01-02 07:00:00', '2018-01-02 08:03:00', 3, 3, 12),
    ('2018-04-15 16:50:00', '2018-04-15 21:00:00', 3, 4, 13),
    ('2018-08-01 18:30:00', '2018-08-01 21:50:00', 4, 5, 14),
    ('2018-10-31 01:15:00', '2018-10-31 12:55:00', 5, 6, 15),
    ('2019-02-06 06:00:00', '2019-02-06 07:47:00', 1, 7, 9),
    ('2018-12-22 14:42:00', '2018-12-22 15:56:00', 6, 8, 16),
    ('2019-02-06 16:28:00', '2019-02-06 19:18:00', 6, 9, 17),
    ('2019-01-20 19:30:00', '2019-01-20 22:45:00', 7, 10, 18);


            
                

