class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def reset_session
    session[:page_counter] = 0

    redirect_back fallback_location: drinks_path
  end 

  def new
  end

  def create
    user = User.find_by(name: session_params[:name])

    if user && user.authenticate(session_params[:password]) 
      session[:user_id] = user.id 
      redirect_to user
    else 
      flash[:error] = 'Something did not match'
      redirect_to new_login_path
    end 
  end

  def destroy 
    session[:user_id] = nil
    redirect_to drinks_path
  end 
  
  
  private 
  def session_params
    params.require(:session).permit(:name, :password)
  end 
end 