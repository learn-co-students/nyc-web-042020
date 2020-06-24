class FoodsController < ApplicationController

  def index
    @foods = Food.all
    render json: @foods
  end

  def create
    @food = Food.create(food_params)
    render json: @food
  end

  private

  def food_params
    params.permit(:foodName, :foodType, :count)
  end

end
