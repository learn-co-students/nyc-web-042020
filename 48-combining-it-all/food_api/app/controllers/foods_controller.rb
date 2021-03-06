class FoodsController < ApplicationController

  def index
    @foods = Food.order(:id)
    render json: @foods
  end

  def create
    @food = Food.create(food_params)
    render json: @food
  end

  def destroy
    @food = Food.find(params[:id])
    @food.destroy
    render json: @food
  end

  def update
    @food = Food.find(params[:id])
    @food.update(food_params)
    render json: @food
  end

  private

  def food_params
    params.permit(:foodName, :foodType, :count)
  end

end
