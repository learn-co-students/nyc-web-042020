require 'sinatra'
require 'pry'


# Index Page
get '/users' do 
  # @users = User.all
  '<h1>HOME PAGE</h1>'
end 


get '/users/:id' do 
  @user = User.find(params[:id])
  # erb :show
  binding.pry
end 

