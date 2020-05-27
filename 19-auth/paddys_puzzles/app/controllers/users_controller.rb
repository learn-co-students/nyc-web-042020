class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :new]


  def index 
    @users = User.all
  end 
  
  def show 
    @user = User.find(params[:id])

    if @user == @logged_in_user
      render :show 
    else
      redirect_to users_path 
    end 
  end 

  def new 
    @user = User.new
  end 

  def create 
    user = User.create(user_params)

    if user.valid? 
      session[:user_id] = user.id
      redirect_to user 
    else 
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end
  end 


  private 
  def user_params
    params.require(:user).permit(:name, :image_url, :password)
  end 
end
