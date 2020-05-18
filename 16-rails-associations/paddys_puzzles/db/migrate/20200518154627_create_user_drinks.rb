class CreateUserDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :user_drinks do |t|
      t.integer :drink_id
      t.integer :user_id
      t.string :content
      t.integer :rating

      t.timestamps
    end
  end
end
