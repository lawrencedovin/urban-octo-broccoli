import requests

key = 'RGUMAOp4rwfRvBpnwUfSq5GIKDuGHPXX'
location = '11911 Rocking Horse Rd, Rockville, MD'
URL = 'http://www.mapquestapi.com/geocoding/v1/address'

response = requests.get(URL, 
                        params={"key": key, "location": location})

json_response = response.json()
results = json_response["results"]

print(f'The results are: {results}')