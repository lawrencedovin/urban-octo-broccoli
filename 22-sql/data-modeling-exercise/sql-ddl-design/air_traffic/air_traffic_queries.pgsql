-- Query for all countries
SELECT * FROM countries;

-- Query for all cities
SELECT * FROM cities;

-- Query for all locations getting the cities with the corresponding country
SELECT locations.id, countries.name, cities.name
FROM locations
JOIN countries
ON country_id = countries.id
JOIN cities
ON city_id = cities.id;

-- Query for all available cities in the United States
SELECT locations.id, countries.name, cities.name
FROM locations
JOIN countries
ON country_id = countries.id
JOIN cities
ON city_id = cities.id
WHERE countries.name = 'United States';

-- Query for all airlines
SELECT * 
FROM airlines; 

-- Queries for all customers with their citizenship details
SELECT first_name, last_name, birthday, 
citizenships.id as citizenship_id, 
countries.name as citizen_country, 
cities.name as citizen_city
FROM customers
JOIN citizenships
ON citizenship_id = citizenships.id
JOIN locations
ON citizenships.location_id = locations.id
JOIN countries
ON locations.country_id = countries.id
JOIN cities
ON locations.city_id = cities.id;

-- Queries for all flight details hooray! :')
SELECT flights.id as flight_id, departure, arrival, 
airlines.name as airlines, 
from_countries.name as from_country, 
from_cities.name as from_city,
to_countries.name as to_country, 
to_cities.name as to_city

FROM flights

JOIN airlines
ON airline_id = airlines.id

JOIN locations AS from_locations
ON from_location_id = from_locations.id
JOIN countries AS from_countries
ON from_locations.country_id = from_countries.id
JOIN cities AS from_cities
ON from_locations.city_id = from_cities.id

JOIN locations AS to_locations
ON to_location_id = to_locations.id
JOIN countries AS to_countries
ON to_locations.country_id = to_countries.id
JOIN cities AS to_cities
ON to_locations.city_id = to_cities.id;