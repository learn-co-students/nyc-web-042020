class Drink < ApplicationRecord
  has_many :user_drinks
  has_many :users, through: :user_drinks
end