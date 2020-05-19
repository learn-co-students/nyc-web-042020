class Drink < ApplicationRecord
  has_many :user_drinks
  has_many :users, through: :user_drinks

  validates :name, uniqueness: true
  validates :name, :category, presence: true
  validates :category, inclusion: {in: ["beer", "cocktail", "wine"]}
  validates :ounces, numericality: {greater_than_or_equal_to: 6, less_than_or_equal_to: 40}

  validate :name_can_not_be_scott

  def name_can_not_be_scott
    if self.name && self.name.downcase == 'scott'
      self.errors.add(:name, "Can not be Scott")
    end 
  end 



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