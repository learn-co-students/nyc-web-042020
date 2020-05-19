class DrinksController < ApplicationController
  before_action :find_drink, only: [:show, :edit, :update, :destroy]

  def index 
    @drinks = Drink.all
    # render :index
  end 

  def show 
    # @drink = Drink.find(params[:id])
  end 

  def new 
    @drink = Drink.new
    # render :new
  end 

  def create
    @drink = Drink.create(drink_params)
    
    # drink = Drink.new(drink_params)
    # drink.save -- returns a boolean

    if @drink.valid?
      flash[:success] = "WELCOME TO THE DRINK LIST FELLOW DRINk"
      redirect_to drink_path(@drink.id)
    else 
      flash[:my_errors] = @drink.errors.full_messages
     
      redirect_to new_drink_path
    end 
  end 

  def edit 
    # @drink = Drink.find(params[:id])
  end 
  
  def update 
    # @drink = Drink.find(params[:id])

    if @drink.update(drink_params)
      redirect_to drink_path(@drink)
    else
      flash[:my_errors] = @drink.errors.full_messages
      redirect_to edit_drink_path(@drink)
    end 
  end 

  def destroy 
    # @drink = Drink.find(params[:id])
    @drink.destroy 

    redirect_to drinks_path
  end 

  private 

  def drink_params
    params.require(:drink).permit(:name, :img_url, :ounces, :category)
  end 

  def find_drink
    @drink = Drink.find(params[:id])
  end 
end

