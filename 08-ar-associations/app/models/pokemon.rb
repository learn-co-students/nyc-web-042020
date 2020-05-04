class Pokemon < ActiveRecord::Base
    has_many :pokemon_trainers
    has_many :trainers, through: :pokemon_trainers

    # def pokemon_trainers 

    # end

    # def trainers 
    #     pokemon_trainers.map do |pt|
    #         pt.trainer
    #     end
    # end

end
# CRUD
    # - Create 
    # - Read 
    # - Update 
    # - Delete/Destroy

# pokemon.trainer
# pokemon.trainer=