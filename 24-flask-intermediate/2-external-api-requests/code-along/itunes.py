import requests

# https://itunes.apple.com/search?term=jack+johnson&limit=25
resp = requests.get("https://itunes.apple.com/search", 
                    params={"term": "jack johnson", "limit": 2})

data = resp.json()
results = data["results"]

for collection in results:
    print(collection["collectionName"])