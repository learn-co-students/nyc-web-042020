class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.integer :ounces
      t.string :category
      t.string :img_url

      t.timestamps
    end
  end
end
