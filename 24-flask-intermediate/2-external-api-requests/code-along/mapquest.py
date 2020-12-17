import requests
from secrets import API_SECRET_KEY

location = '11911 Rocking Horse Rd, Rockville, MD'
URL = 'http://www.mapquestapi.com/geocoding/v1/address'

response = requests.get(URL, 
                        params={"key": API_SECRET_KEY, "location": location})

json_response = response.json()
results = json_response["results"]
location = results[0]["locations"]
coords = location[0]["latLng"]

print(f'The coords are: {coords["lat"]} {coords["lng"]}')