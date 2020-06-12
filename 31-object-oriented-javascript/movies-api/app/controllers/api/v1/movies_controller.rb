class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all.sort_by { |movie| movie.title }

    render json: movies, except: [:created_at, :updated_at]
    # render json: movies, include: :tickets # serialization
  end

  def create
    movie = Movie.create!(movie_params)

    render json: movie
  end

  def update
    movie = Movie.find(params[:id])

    movie.update(movie_params)

    render json: movie
  end

  def destroy
    movie = Movie.find(params[:id])

    movie.destroy

    render json: movie
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :imageUrl, :score, :genre, :year)
  end
end
