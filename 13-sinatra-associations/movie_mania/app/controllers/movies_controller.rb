class MoviesController < ApplicationController
  get "/movies" do
    @movies = Movie.all

    erb :"movies/index"
  end

  get "/movies/new" do 
    erb :"movies/new"
  end 

  get "/movies/:id" do 
    @movie = Movie.find(params[:id])
    
    erb :"movies/show"
  end 
  
  post '/movies' do
    movie = Movie.create(params)

    redirect to "/movies/#{movie.id}"
  end

  get '/movies/:id/edit' do 
    @movie = Movie.find(params[:id])

    erb :"movies/edit"
  end 

  patch '/movies/:id' do 
    movie = Movie.find(params[:id])
    movie.update(params[:movie])

    redirect to "/movies/#{movie.id}"
  end 


  delete '/movies/:id' do 
    movie = Movie.find(params[:id])
    movie.destroy

    redirect to '/movies'  
  end 
end 