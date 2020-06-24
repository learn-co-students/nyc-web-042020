class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :foodName
      t.string :foodType
      t.integer :count

      t.timestamps
    end
  end
end
