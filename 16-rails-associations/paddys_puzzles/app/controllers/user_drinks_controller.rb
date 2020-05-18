class UserDrinksController < ApplicationController

  def new
     @user_drink = UserDrink.new
  end 

  def create 
    user_drink = UserDrink.create(user_drink_params)
    
    redirect_to drink_path(user_drink.drink)
  end 

  private 

  def user_drink_params
    params.require(:user_drink).permit(:content, :rating, :user_id, :drink_id)
  end 
end
