-- Planets with their galaxy
SELECT planets.id as planet_id, planets.name, 
galaxies.id as galaxy_id, galaxies.name 
FROM planets
JOIN galaxies
ON galaxies.id = galaxy_id;

-- Planets with their moons
SELECT planets_id, planets.name, moons_id, moons.name
FROM planets_moons
JOIN moons
ON moons.id = moons_id
JOIN planets 
ON planets.id = planets_id;

-- Query for all planets
SELECT * FROM planets;

-- Query for all galaxies
SELECT * FROM galaxies;

-- Query for all moons
SELECT * FROM moons;

-- Query for all planets and moons relationship
SELECT * FROM planets_moons;