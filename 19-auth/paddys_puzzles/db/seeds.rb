# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "...Destroying All UserDrinks"
UserDrink.destroy_all
puts "...Destroying All Drinks"
Drink.destroy_all
puts "...Destroying All Users"
User.destroy_all

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



# ---------------- CREATING USERS ---------------------------
users = [
  {name: "Alice Wang", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GPAH3-127c3e2a38b4-512"},
  {name: "Brandon Yoon", img_url: "https://ca.slack-edge.com/T02MD9XTF-U010ARCG14H-fcfdf6775708-512"},
  {name: "Caroline Glass", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GNC77-9c120100f0b3-512"},
  {name: "Coral Fussman", img_url: "https://ca.slack-edge.com/T02MD9XTF-U01083YN6CA-07e236f1fe28-512"},
  {name: "David Spector", img_url: "https://ca.slack-edge.com/T02MD9XTF-U0109GSHHCH-c56e957ff2c6-512"},
  {name: "Don Namgyal", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GMNLD-59c1df2a2243-512"},
  {name: "Jallen Messersmith", img_url: "https://ca.slack-edge.com/T02MD9XTF-UMHV8TFL4-1fc4bd7f93ae-512"},
  {name: "James Jiang", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GKNCD-4b9c75b022f8-512"},
  {name: "Jessica Kim", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GJKUM-74112b0f9808-512"},
  {name: "Joseph Lin", img_url: "https://ca.slack-edge.com/T02MD9XTF-U010ARCJ54H-887e6f47bab8-512"},
  {name: "Kyle Tomanelli", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GGGDB-4f0e76a7f01d-512"},
  {name: "Maharaj Syed", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTV12RR62-cdbdc4226119-512"},
  {name: "Meghann Walsh", img_url: "https://ca.slack-edge.com/T02MD9XTF-UL33YDYRX-305742ce1399-512"},
  {name: "Ramon Echeverria", img_url: "https://ca.slack-edge.com/T02MD9XTF-U010MQQRC0N-f7e942518a93-512"},
  {name: "Rosie Wilt", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GEJ6R-a7f9d525aec1-512"},
  {name: "Ryan Meinzer", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GE1V3-gadbdfa9bd60-512"},
  {name: "Sofia Tofigh", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GDLBF-5b9097599cb3-512"},
  {name: "Srishti Nath", img_url: "https://ca.slack-edge.com/T02MD9XTF-U011R2GA4RK-0d497953e3ef-512"},
  {name: "Tashawn Williams", img_url: "https://ca.slack-edge.com/T02MD9XTF-U7PSME4DA-8b811931b3d9-512"}
]

users.each {|user| User.create(user)}


# CREATING USERDRINKS

50.times do
  UserDrink.create(user_id: User.all.sample.id, drink_id: Drink.all.sample.id ,content: Faker::ChuckNorris.fact, rating: rand(1..5))
end 

