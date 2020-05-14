class ReviewsController < ApplicationController
  get '/reviews/new' do
    erb :"reviews/new"
  end  

  post '/reviews' do 
    review = Review.create(params)

    redirect to "/movies/#{review.movie.id}"
    # redirect to "/movies/#{review.movie_id}"
    # redirect to "/movies/#{params[:movie_id]}"
  end 
end 