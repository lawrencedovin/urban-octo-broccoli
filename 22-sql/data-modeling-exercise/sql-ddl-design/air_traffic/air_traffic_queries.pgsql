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