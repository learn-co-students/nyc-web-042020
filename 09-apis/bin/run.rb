require 'rest-client'
require_relative '../config/environment'
require 'pry'

def welcome_user
    puts "Hello User what is your name?"
    user_name = gets.chomp
    user_name
end

def get_food
    puts "What is your favorite food?"
    fav_food = gets.chomp 
    food = Food.find_or_create_by(name: fav_food)
    food
end 

def run
    user_name = welcome_user
    puts "Welcome #{user_name}"
    food = get_food
    puts "Oh Awesome! #{food.name} is one of my favorites too"
end


run