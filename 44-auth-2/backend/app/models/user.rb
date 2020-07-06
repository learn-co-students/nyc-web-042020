class User < ApplicationRecord
    has_many :snacks
    has_secure_password
    validates :username, uniqueness: true
end
