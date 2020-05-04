class Trainer < ActiveRecord::Base
    has_many :pokemon_trainers
    has_many :pokemons, through: :pokemon_trainers

end

