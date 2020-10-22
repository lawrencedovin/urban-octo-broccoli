chicken = {
    "name": "butters",
    "age": "6 months" ,
    "breed": "Silkie"
}

stuff = {True: 34, 100: 'AWESOME', [1,2,3]: 'asd'}

"breed" in chicken #Only checks the keys

chicken["breed"]
chicken["age"]

chicken.get("weight", "2 lbs")