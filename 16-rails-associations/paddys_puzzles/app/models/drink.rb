class Drink < ApplicationRecord
  has_many :user_drinks
  has_many :users, through: :user_drinks


  def rating_average
    total = 0

    self.user_drinks.each do |user_drink|
      total += user_drink.rating
    end 

    if self.user_drinks.length > 0
      total / self.user_drinks.length
    else 
      total
    end 
  end 
end