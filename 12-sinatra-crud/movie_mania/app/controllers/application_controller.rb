require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  get "/movies" do
    @movies = Movie.all
    erb :index
  end

  get "/movies/new" do 
    erb :new
  end 

  get "/movies/:id" do 
    @movie = Movie.find(params[:id])
    
    erb :show
  end 
  
  post '/movies' do
    movie = Movie.create(params)

    redirect to "/movies/#{movie.id}"
  end

  get '/movies/:id/edit' do 
    @movie = Movie.find(params[:id])

    erb :edit
  end 

  patch '/movies/:id' do 
    movie = Movie.find(params[:id])
    movie.update(params[:movie])

    redirect to "/movies/#{movie.id}"
  end 
end
