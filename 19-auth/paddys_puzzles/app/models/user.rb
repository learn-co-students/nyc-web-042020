class User < ApplicationRecord
  has_many :user_drinks
  has_many :drinks, through: :user_drinks

  has_secure_password

  # def password=(secret)
  #   byebug
  #   hashed_pass = BCrypt::Password.create(secret)
  #   self.password_digest = hashed_pass
  # end 

  # def password
  # end 

  # def authenticate(secret)
  #   hashed_pass = BCrypt::Password.new(secret)

  #   self.password_digest == hashed_pass 
  # end 
end

