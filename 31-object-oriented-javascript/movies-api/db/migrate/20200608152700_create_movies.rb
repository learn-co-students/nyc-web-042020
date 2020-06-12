class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.integer :score
      t.string :imageUrl
      t.string :genre

      t.timestamps
    end
  end
end
