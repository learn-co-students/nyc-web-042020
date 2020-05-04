class AddTrainerIdToPokemons < ActiveRecord::Migration[5.2]
  def change
    add_column :pokemons, :trainer_id, :integer
  end
end
