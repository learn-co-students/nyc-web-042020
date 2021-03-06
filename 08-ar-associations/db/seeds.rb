# Add seed data here. Seed your database with `rake db:seed`

# Movie.create(title: "Wargames", release_date: 1983, director: "John Badham", lead: "Matthew Broderick", in_theaters: false)

# Movie.create(title: "The Sting", release_date: 1973, director: "George Roy Hill", lead: "Paul Newman", in_theaters: false)

# Movie.create(title: "Nebraska", release_date: 2013, director: "Alexander Payne", lead: "Bruce Dern", in_theaters: true)

# Movie.create(title: "Muppets Most Wanted", release_date: 2014, director: "James Bobin", lead: "Tom Hiddleston", in_theaters: true)

# Movie.create(title: "Zero Dark Thirty", release_date: 2012, director: "Kathryn Bigelow", lead: "Jessica Chastain", in_theaters: false)

Pokemon.delete_all
Trainer.delete_all
PokemonTrainer.delete_all

t1 = Trainer.create(name: "Jallen", age: 21)
t2 = Trainer.create(name: "Meghann", age: 21)

Pokemon.create(name: "Pikachu")
Pokemon.create(name: "Charmander")
Pokemon.create(name: "Bulbasaur")

PokemonTrainer.create(pokemon: Pokemon.first, trainer: t1)
PokemonTrainer.create(pokemon: Pokemon.first, trainer: t2)