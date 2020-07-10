class UserFoodsController < ApplicationController
    before_action :authorized, only: [:destroy]

    def destroy
        # @user is the user who made the request based on the token
        #@user_food = UserFood.find(params[:id])
        @user_food = @user.user_foods.find_by(id: params[:id])
        if @user_food
            @user_food.destroy
            render json: @user_food
        else 
            render json: {error: "Nice try, you can only delete your own"}
        end
    end
end
