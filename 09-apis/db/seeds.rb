require 'pry'
require 'rest-client'
require 'json'
# Food.create(name: "Broccoli", tasty: false)
# Food.create(name: "Pizza", tasty: true)

response = RestClient.get("http://localhost:3000/foods")
data = JSON.parse(response)

data.each do |food_hash|
 #create an instance of Food
 Food.create(name: food_hash["name"])
 poke = Pokemon.new(name: hash["name"])
 response = RestClient.get(hash["url"])
 poke_data = JSON.parse 
 poke_data["abilities"]
 poke.update(ability: )
 poke_data
end



binding.pry