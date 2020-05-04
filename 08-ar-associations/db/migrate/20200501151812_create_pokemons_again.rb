class CreatePokemonsAgain < ActiveRecord::Migration[5.2]
  def change
      create_table :pokemons do |t|
      t.string :name
      t.string :p_type
      t.integer :level
      t.boolean :likes_trainer?, default: true
    end
  end
end
