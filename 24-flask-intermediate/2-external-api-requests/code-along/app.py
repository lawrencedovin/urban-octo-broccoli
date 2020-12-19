from flask import Flask, render_template, request
import requests
from secrets import API_SECRET_KEY

location = '11911 Rocking Horse Rd, Rockville, MD'
API_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address'

app = Flask(__name__)

def get_coords(address):
    response = requests.get(API_BASE_URL, 
                            params={"key": API_SECRET_KEY, "location": address})
    
    data = response.json()
    results = data["results"]
    latitude = data["results"][0]["locations"][0]["latLng"]["lat"]
    longitude = data["results"][0]["locations"][0]["latLng"]["lng"]
    coords = {"latitude": latitude, "longitude": longitude}
    return coords

@app.route('/')
def show_address_form():
    return render_template("address_form.html")

@app.route('/geocode')
def show_coordinates():
    address = request.args["address"]
    coords = get_coords(address)
    return render_template("address_form.html", coords=coords)
