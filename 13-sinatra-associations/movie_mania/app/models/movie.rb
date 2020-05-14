class Movie < ActiveRecord::Base
  has_many :reviews 

  # def reviews 
  #   does some logic
  # end  
end
