class CreatePokemonTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemon_trainers do |t|
      t.integer :pokemon_id
      t.integer :trainer_id
    end
  end
end
