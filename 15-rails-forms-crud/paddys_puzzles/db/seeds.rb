# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "...Destroying All Drinks"
Drink.destroy_all

# categories = ["wine"]

# puts "...creating beers"
# 25.times do 
#   Drink.create(name: Faker::Beer.brand , category: "beer", ounces: rand(8..40))
# end 

# puts "...creating other drinks"
# 25.times do 
#   Drink.create(name: Faker::TvShows::GameOfThrones.character, category: categories.sample, ounces: rand(8..40))
# end 
def create_cocktail(cocktail)
  Drink.create(name: cocktail["strDrink"], ounces: rand(8..40), img_url: cocktail["strDrinkThumb"], category: "Cocktail")
end 

def create_beer(beer)
  Drink.create(name: beer["name"], ounces: rand(8..40), img_url: beer ["image_url"], category: "beer")
end 

cocktail_base_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

cocktails = ["old fashion", "mojito", "margarita", "moscow mule", "Manhattan", "Whiskey Sour", "martini", "Mimosa"]

cocktails.each do |cocktail| 
  res = RestClient.get(cocktail_base_url + cocktail)
  res_body = res.body
  cocktail_hash = JSON.parse(res_body)
  
  create_cocktail(cocktail_hash["drinks"][0])
end 

beer_url = "https://api.punkapi.com/v2/beers/random"

10.times do 
  res = RestClient.get(beer_url)
  res_body = res.body  
  beer_array = JSON.parse(res_body)

  create_beer(beer_array[0])
end 

