class RemoveTrainerIdFromPokemon < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :trainer_id, :integer
  end
end
