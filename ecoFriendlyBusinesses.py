from metaphor_python import Metaphor
metaphor = Metaphor("de11642b-8b29-4c4d-8520-00e82873b20f")

def searchBusinesses(location):


    results = metaphor.search(f'Eco-Friendly businesses near {location}', use_autoprompt=True)
    print(results)

searchBusinesses("St.Louis")